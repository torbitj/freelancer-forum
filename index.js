/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// State
const state = {
  // State variable for array of freelancers
  freelancers: []
}

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

// Make a freelancer object
const makeFreelancer = () => {
  // Variables to randomly assign name, occupation and rate
  const flNameIndex = Math.floor(Math.random() * NAMES.length);
  const flOccupationIndex = Math.floor(Math.random() * OCCUPATIONS.length);
  const flRate = Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min) + PRICE_RANGE.min);

  const newFreelancer = {}
  newFreelancer.name = NAMES[flNameIndex];
  newFreelancer.occupation = OCCUPATIONS[flOccupationIndex];
  newFreelancer.rate = flRate;

  return newFreelancer;
}