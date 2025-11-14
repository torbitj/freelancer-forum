/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// State
const state = {
  // State variable for array of freelancers
  freelancers: [],
  // Average rate state variable
  averageRate: 0,
  // State variable for array of freelancer rows
  freelancerRowsArr: []
}

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

// Helper Functions
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

// Initialize freelancers array
for (let i = 0; i < NUM_FREELANCERS; i++) {
  const freelancer = makeFreelancer();
  state.freelancers.push(freelancer);
}

// Write a function to return average rate of all freelancers
// Pass in freelancer array
const averageFlRate = (freelancers) => {
  // Loop through and add all rates
  const allRatesTotal = freelancers.reduce((currTotal, currFL) => {
    const currRate = currFL.rate;
    currTotal += currRate;
    return currTotal;
  }, 0);
  // Calculate avergage rate
  const avgRate = allRatesTotal / freelancers.length;
  // Return average rate
  return avgRate;
}

// Store average freelancer rate
state.averageRate = averageFlRate(state.freelancers);

// Component Functions
// Single Freelancer Component
const FreelancerRow = (freelancer) => {
  // Create table row el
  const freelancerTableRow = document.createElement(`tr`);
  // Add class to table row
  freelancerTableRow.classList.add(`freelancer-row`);
  // Loop through object
  for (property in freelancer) {
    // Create new table data element
    const freelancerTdEl = document.createElement(`td`);
    // Add class to table data el
    freelancerTdEl.classList.add(`freelancer-data`);
    // Fill table data element with property value
    freelancerTdEl.innerHTML = `${freelancer[property]}`;
    // Add to table row
    freelancerTableRow.append(freelancerTdEl);
  }
  // Return new row
  return freelancerTableRow;
}

// Create array of rows to append to new body and return the new body
const FreelancerRows = (freelancers) => {
  // Create new tbody element
  const newTableBody = document.createElement(`tbody`);
  newTableBody.id(`freelancer-table-body`)
  // For each freelancer in freelancer array, turn it into a table row and push
  // into freelancers row array
  freelancers.forEach((freelancer) => state.freelancerRowsArr.push(FreelancerRow(freelancer)));
  // For each row, append it to the new bdy
  state.freelancerRowsArr.forEach((row) => newTableBody.append(row));
  // Return new body
  return newTableBody;
}