/* THE ARCHIVE. The whole site is built from this one file.

   To add a model: add a line to MODELS.
     core: true marks the one model at the center of the home page.
     logo: image file for that model, ratio: its width divided by its height, description: shown on the Models page.
     history, how, ce: optional text for the box on that model's page
     (its background, how it works, and which courses earn continuing education).

   To add a product: add an entry to PRODUCTS.
     type:  "book", "audio" or "course"
     model: the model's id from MODELS (this is its tag)
     cover: image file or URL. Leave "" to show the placeholder.
     link:  Stripe, LearnWorlds or other store URL. Leave "" until ready.
     tags:  any extra labels, for example ["Beginner"]

   The seven models and logos are real. Every product below is a placeholder. */

const MODELS = [
  { id: "psynergetics", name: "Psynergetics", logo: "logos/psynergetics.png", ratio: 2.227, core: true, description: "" },
  { id: "nlp", name: "NLP", logo: "logos/nlp.png", ratio: 1.016, description: "" },
  { id: "identity-evolution", name: "Identity Evolution", logo: "logos/identity-evolution.png", ratio: 2.085, description: "" },
  { id: "neurocise-studios", name: "Neurocise Studios", logo: "logos/neurocise-studios.png", ratio: 1.385, description: "" },
  { id: "emerge", name: "EMERGE", logo: "logos/emerge.png", ratio: 1.641, description: "" },
  { id: "eyepointing-neuropointing", name: "EyePointing & NeuroPointing", logo: "logos/eyepointing-neuropointing.png", ratio: 1.667, description: "" },
  { id: "neurotrancework", name: "NeuroTrancework", logo: "logos/neurotrancework.png", ratio: 2.5, description: "" },
];

/* Placeholder products. Delete this block when real products go in. */
const PRODUCTS = [];
const COUNTS = { book: [6,5,7,4,3,5,4,3], audio: [4,6,5,8,3,4,3,5], course: [3,2,4,5,2,3,3,2] };
const WORD = { book: "Book", audio: "Audio", course: "Course" };
MODELS.forEach((m, i) => {
  Object.keys(COUNTS).forEach(type => {
    for (let n = 1; n <= COUNTS[type][i % 8]; n++) {
      PRODUCTS.push({ title: `${WORD[type]} ${n}`, type, model: m.id, about: "", cover: "", link: "", tags: [] });
    }
  });
});
