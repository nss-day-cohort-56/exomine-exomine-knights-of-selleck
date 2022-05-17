import { getTransientState, getFacilityById, getFacilityMinerals, getMineralById } from "./database.js";

export const FacilityMinerals = () => {
  let transientState = getTransientState();
  let html = "";

  let titleString = "Facility Minerals";
  let listItemsString = "";

  if (transientState.selectedFacilityId !== undefined) {
    // if facility has been selected from dropdown, display in title
    titleString += ` for ${getFacilityById(transientState.selectedFacilityId).name}`;

    // TODO: use facilityMinerals to create radio button list elements
    let facilityMinerals = getFacilityMinerals(transientState.selectedFacilityId);
    listItemsString += "<ul class='text-center no-bullets'>";

    const listItemsArray = facilityMinerals.map((facilityMineral) => {
      return `
        <li class="mt-0 facility-mineral">
          <input type="radio" name="mineralRadio" value="${facilityMineral.id}" /> ${facilityMineral.quantity} tons of ${getMineralById(facilityMineral.mineralId).name}
        </li>`;
    });
    listItemsString += listItemsArray.join("");

    listItemsString += "</ul>";
  }

  html += `<h3 class="text-center">${titleString}</h3>`;
  html += `${listItemsString}`;

  return html;
};
