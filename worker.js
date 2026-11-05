// Serves the site, plus one small job the browser can't do alone: reading the Substack feed.
const FEED = "https://eklsr.substack.com/feed";

const clean = (s = "") =>
  s.replace(/^\s*<!\[CDATA\[/, "").replace(/\]\]>\s*$/, "")
   .replace(/<[^>]+>/g, " ")
   .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
   .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
   .replace(/&(amp|lt|gt|quot|apos|nbsp);/g, (_, e) => ({ amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " }[e]))
   .replace(/\s+/g, " ").trim();

const tag = (xml, name) => {
  const m = xml.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`));
  return m ? clean(m[1]) : "";
};

export function parseFeed(xml, limit = 5) {
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, limit).map(([, item]) => ({
    title: tag(item, "title"),
    link: tag(item, "link"),
    date: tag(item, "pubDate"),
    summary: tag(item, "description").slice(0, 170),
  })).filter(p => p.title && /^https:\/\//.test(p.link));
}

async function substack(ctx) {
  const key = new Request("https://feed.cache/substack");
  const hit = await caches.default.match(key);
  if (hit) return hit;
  const r = await fetch(FEED, { headers: { "User-Agent": "NeurociseStudios-site", Accept: "application/rss+xml, application/xml" } });
  if (!r.ok) return Response.json({ posts: [], error: "unavailable" }, { status: 502 });
  const res = Response.json({ posts: parseFeed(await r.text()) }, { headers: { "Cache-Control": "public, max-age=1800" } });
  ctx.waitUntil(caches.default.put(key, res.clone()));
  return res;
}

export default {
  async fetch(request, env, ctx) {
    const { pathname } = new URL(request.url);
    if (pathname === "/api/substack") {
      try { return await substack(ctx); }
      catch { return Response.json({ posts: [], error: "unavailable" }, { status: 502 }); }
    }
    if (pathname === "/about" || pathname === "/about/") return Response.redirect(new URL("/#about", request.url).href, 302);
    return env.ASSETS.fetch(request);
  },
};
