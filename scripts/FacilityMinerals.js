import {
  getTransientState,
  getFacilityById,
  getFacilityMinerals,
  getMineralById,
  setFacilityMineral,
  QuantityMineralsTextBuilder
} from "./database.js";

export const FacilityMinerals = () => {
  let transientState = getTransientState();
  let html = "";

  let titleString = "Facility Minerals";
  let listItemsString = "";

  if (transientState.selectedFacilityId !== undefined) {
    let facility = getFacilityById(transientState.selectedFacilityId);
    // if facility has been selected from dropdown, display in title
    titleString += ` for ${facility.name}`;

    let facilityMinerals = getFacilityMinerals(transientState.selectedFacilityId);
    listItemsString += "<ul class='text-center no-bullets'>";

    const listItemsArray = facilityMinerals.map((facilityMineral) => {
      let mineral = getMineralById(facilityMineral.mineralId);
      return `
        <li class="mt-0 facility-mineral">
          <input type="radio" name="facilityMineralSelect" value="${facilityMineral.id}"/> 
          ${QuantityMineralsTextBuilder(facilityMineral.quantity, mineral.name)}
        </li>`;
    });
    listItemsString += listItemsArray.join("");

    listItemsString += "</ul>";
  }

  html += `<h3 class="text-center">${titleString}</h3>`;
  html += `${listItemsString}`;

  return html;
};

document.addEventListener("change", (event) => {
  if (event.target.name === "facilityMineralSelect") {
    const facilityMineralId = event.target.value;
    setFacilityMineral(parseInt(facilityMineralId));
  }
});
