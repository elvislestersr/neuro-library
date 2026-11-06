/* THE ARCHIVE. The whole site is built from this one file.

   To add a model: add a line to MODELS. url: where its logo and menu link go.
     core: true marks the one model at the center of the home page.
     logo: image file for that model, ratio: its width divided by its height, size: optional scale (0.75 = 75%), description: shown on the Models page.
     history, how, ce: optional text for the box on that model's page
     (its background, how it works, and which courses earn continuing education).

   To add a product: add an entry to PRODUCTS.
     type:  "book", "audio" or "course"
     model: the model's id from MODELS (this is its tag)
     cover: image file or URL. Leave "" to show the placeholder.
     link:  Stripe, LearnWorlds or other store URL. Leave "" until ready.
     tags:  any extra labels, for example ["Beginner"]

   The seven models and logos are real. */

const MODELS = [
  { id: "psynergetics", url: "https://www.neurocisestudios.com/psynergetics", name: "Psynergetics", logo: "logos/psynergetics.png", ratio: 2.227, core: true, description: "" },
  { id: "nlp", url: "https://www.neurocisestudios.com/nlp", name: "NLP", logo: "logos/nlp.png", ratio: 1.016, size: 0.75, description: "" },
  { id: "identity-evolution", url: "https://www.neurocisestudios.com/identity-evolution", name: "Identity Evolution", logo: "logos/identity-evolution.png", ratio: 2.085, description: "" },
  { id: "neurocise-studios", url: "https://www.neurocisestudios.com/neurocise", name: "Neurocise Studios", logo: "logos/neurocise-studios.png", ratio: 1.385, description: "" },
  { id: "emerge", url: "https://www.neurocisestudios.com/eye-movement", name: "EMERGE", logo: "logos/emerge.png", ratio: 1.641, description: "" },
  { id: "eyepointing-neuropointing", url: "https://www.neurocisestudios.com/eye-movement", name: "EyePointing & NeuroPointing", logo: "logos/eyepointing-neuropointing.png", ratio: 1.667, description: "" },
  { id: "neurotrancework", url: "https://www.neurocisestudios.com/neurotrancework", name: "NeuroTrancework", logo: "logos/neurotrancework.png", ratio: 2.5, description: "" },
];

/* Products live on LearnWorlds for now, so this list stays empty. */
const PRODUCTS = [];
