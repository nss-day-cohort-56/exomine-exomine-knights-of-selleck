const database = {
  transientState: {},

  governors: [
    { id: 1, name: "Ned", active: true, colonyId: 1 },
    { id: 2, name: "Joe", active: true, colonyId: 1 },
    { id: 3, name: "Fred", active: false, colonyId: 2 },
    { id: 4, name: "Jane ", active: true, colonyId: 2 },
    { id: 5, name: "Jill", active: true, colonyId: 3 },
    { id: 5, name: "Kendal", active: true, colonyId: 3 }
  ],

  colonies: [
    { id: 1, name: "Earth" },
    { id: 2, name: "Mars" },
    { id: 3, name: "The Moon" }
  ],

  minerals: [
    { id: 1, name: "Diamond" },
    { id: 2, name: "Graphite" },
    { id: 3, name: "Salt" },
    { id: 4, name: "Gold" },
    { id: 5, name: "Silver" },
    { id: 6, name: "Copper" }
  ],

  facilities: [
    { id: 1, name: "Altoid", active: true },
    { id: 2, name: "Crema", active: true },
    { id: 3, name: "Target", active: true },
    { id: 4, name: "Roast", active: false },
    { id: 5, name: "Starbucks", active: true }
  ],

  facilityMinerals: [
    { id: 1, facilityId: 1, mineralId: 1, quantity: 90 },
    { id: 2, facilityId: 1, mineralId: 2, quantity: 150 },
    { id: 3, facilityId: 3, mineralId: 2, quantity: 221 },
    { id: 4, facilityId: 3, mineralId: 4, quantity: 5000 },
    { id: 5, facilityId: 3, mineralId: 3, quantity: 100 },
    { id: 6, facilityId: 2, mineralId: 1, quantity: 120 },
    { id: 7, facilityId: 2, mineralId: 3, quantity: 150 },
    { id: 8, facilityId: 2, mineralId: 4, quantity: 2000 },
    { id: 9, facilityId: 2, mineralId: 5, quantity: 2300 },
    { id: 10, facilityId: 4, mineralId: 1, quantity: 1500 },
    { id: 11, facilityId: 4, mineralId: 3, quantity: 2000 },
    { id: 12, facilityId: 4, mineralId: 5, quantity: 165 },
    { id: 13, facilityId: 5, mineralId: 2, quantity: 120 },
    { id: 14, facilityId: 5, mineralId: 4, quantity: 5195 },
    { id: 15, facilityId: 5, mineralId: 5, quantity: 200 },
    { id: 16, facilityId: 5, mineralId: 6, quantity: 1502 }
  ],

  colonyMinerals: [
    { id: 1, colonyId: 1, mineralId: 1, quantity: 2 },
    { id: 2, colonyId: 1, mineralId: 2, quantity: 1 },
    { id: 3, colonyId: 3, mineralId: 4, quantity: 3 },
    { id: 4, colonyId: 3, mineralId: 2, quantity: 3 },
    { id: 5, colonyId: 3, mineralId: 3, quantity: 1 },
    { id: 6, colonyId: 2, mineralId: 5, quantity: 3 },
    { id: 7, colonyId: 2, mineralId: 2, quantity: 3 }
  ]
};

/*
 * Governors
 */
export const getGovernors = () => {
  return database.governors.map((governor) => ({ ...governor }));
};

export const getActiveGovernors = () => {
  return database.governors.filter((governor) => governor.active);
};

export const setGovernor = (governorId) => {
  database.transientState.selectedGovernorId = governorId;
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

/*
 * Colonies
 */
export const getColonies = () => {
  return database.colonies.map((colony) => ({ ...colony }));
};

export const getColonyById = (id) => {
  return database.colonies.find((colony) => colony.id === id);
};

export const setColony = (colonyId) => {
  database.transientState.selectedColonyId = colonyId;
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

/*
 * Minerals
 */
export const getMinerals = () => {
  return database.minerals.map((mineral) => ({ ...mineral }));
};

export const getMineralById = (id) => {
  return database.minerals.find((mineral) => mineral.id === id);
};

export const setMineral = (mineralId) => {
  database.transientState.selectedMineralId = mineralId;
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

/*
 * Facility Minerals
 */
export const getFacilityMinerals = (facilityId) => {
  // Filter the array of facility minerals on the facilityId foreign key
  return database.facilityMinerals.filter((facilityMineral) => facilityMineral.facilityId === facilityId);
};

export const setFacilityMineral = (facilityMineralId) => {
  database.transientState.selectedFacilityMineralId = facilityMineralId;
  // removed stateChanged because this will re-render html. Only need to do that when purchase button is clicked.
  // document.dispatchEvent(new CustomEvent("stateChanged"));
};

/*
 * Colony Minerals
 */
export const getColonyMinerals = (colonyId) => {
  return database.colonyMinerals.filter((mineral) => mineral.colonyId === colonyId);
};

export const purchaseMineral = (facilityMineral) => {
  const transientState = getTransientState()
  const colonyMinerals = getColonyMinerals(transientState.selectedColonyId)
  // database.colonyMinerals[database.facilityMinerals[facilityMineral].id]
  database.facilityMinerals[facilityMineral - 1].quantity -= 1;
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const addCustomOrder = () => {
  const newOrder = {...database.orderBuilder}

  const lastIndex = database.customOrders.length - 1
  newOrder.id = database.customOrders[lastIndex].id + 1

  newOrder.timestamp = Date.now()

  database.customOrders.push(newOrder)

  database.orderBuilder = {}

  document.dispatchEvent(new CustomEvent("stateChanged"))
}

/*
 * Facilities
 */
export const getFacilities = () => {
  return database.facilities.map((facility) => ({ ...facility }));
};

export const getFacilityById = (id) => {
  return database.facilities.find((facility) => facility.id === id);
};

export const setFacility = (facilityId) => {
  database.transientState.selectedFacilityId = facilityId;
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const getTransientState = () => {
  return { ...database.transientState };
};

/* ------ Helper Functions ------ */ //TODO: move to better file?
export const QuantityMineralsTextBuilder = (quantity, mineral, colonyName = null) => {
  let string = "";
  const weight = quantity > 1 ? "tons" : "ton";
  string += ` ${quantity} ${weight} of ${mineral}`;

  if (colonyName !== null) {
    string += ` from ${colonyName}`;
  }

  return string;
};

/* ------ PURCHASING Event Listener ------ */ //TODO: move to better file?

document.addEventListener(
  "click",
  (event) => {
      if (event.target.id === "orderButton") {
          const transientState = getTransientState()
          purchaseMineral(transientState.selectedFacilityMineralId)
      }
  }
)
