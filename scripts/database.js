// fill database with governor, mineral, facility, and colony data

const database = {
    transientState: {

    },

    governors: [
        { id: 1, name: "Ned", active: true, colonyId:  1},
        { id: 2, name: "Joe", active: true, colonyId:  1},
        { id: 3, name: "Fred", active: false, colonyId:  2},
        { id: 4, name: "Jane ", active: true, colonyId:  2},
        { id: 5, name: "Jill", active: true, colonyId:  3},
        { id: 5, name: "Kendal", active: true, colonyId:  3}
      ],
    
      colonies: [
        { id: 1, name: "Earth" },
        { id: 2, name: "Mars" },
        { id: 3, name: "The Moon" },
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
        { id: 1, facilityId: 1, mineralId: 1, quantity: 2 },
        { id: 2, facilityId: 1, mineralId: 1, quantity: 1 },
        { id: 3, facilityId: 3, mineralId: 2, quantity: 3 },
        { id: 4, facilityId: 3, mineralId: 2, quantity: 3 },
        { id: 5, facilityId: 3, mineralId: 3, quantity: 1 },
        { id: 6, facilityId: 2, mineralId: 3, quantity: 7 },
        { id: 7, facilityId: 2, mineralId: 3, quantity: 3 },
        { id: 8, facilityId: 2, mineralId: 4, quantity: 5 },
        { id: 9, facilityId: 2, mineralId: 4, quantity: 5 },
        { id: 10, facilityId: 2, mineralId: 4, quantity: 5 }
      ],
    
      colonyMinerals: [
        { id: 1, colonyId: 1, mineralId: 1, quantity: 2 },
        { id: 2, colonyId: 1, mineralId: 2, quantity: 1 },
        { id: 3, colonyId: 3, mineralId: 4, quantity: 3 },
        { id: 4, colonyId: 3, mineralId: 2, quantity: 3 },
        { id: 5, colonyId: 3, mineralId: 3, quantity: 1 },
        { id: 6, colonyId: 2, mineralId: 5, quantity: 3 },
        { id: 7, colonyId: 2, mineralId: 2, quantity: 3 }
      ],
}


export const getFacilities = () => {
    return database.facilities.map(facility => ({...facility}))
}
export const getGovernors = () => {
    return database.governors.map(governor => ({...governor}))
}

export const getActiveGovernors = () => {
    return database.governors.filter(governor => (governor.active))
}

export const getColonies = () => {
    return database.colonies.map(colony => ({...colony}))
}
export const getMinerals = () => {
    return database.minerals.map(mineral=> ({...mineral}))
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}
export const setGovernor = (governorId) => {
    database.transientState.selectedGovernor = governorId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}
export const setColony = (colonyId) => {
    database.transientState.selectedColony = colonyId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}
export const setMineral = (mineralId) => {
    database.transientState.selectedMineral = mineralId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getTransientState = () => {
    return { ...database.transientState };
  };
export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
    }

