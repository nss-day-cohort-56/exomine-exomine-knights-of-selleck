import { getTransientState, getFacilityById, getFacilityMinerals } from "./database.js";

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
  }

  html += `<h3 class="text-center">${titleString}</h3>`;
  html += `${listItemsString}`;

  return html;
};
