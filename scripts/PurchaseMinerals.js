import { getTransientState, getFacilityById, getFacilityMinerals, getMineralById, setFacilityMineral, purchaseMineral } from "./database.js";



document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            const transientState = getTransientState()
            purchaseMineral(transientState.selectedFacilityMineralId)
        }
    }
)
