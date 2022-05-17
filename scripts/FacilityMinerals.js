import { getTransientState, getFacilityById, getFacilityMinerals } from "./database.js";

export const FacilityMinerals = () => {
  let transientState = getTransientState();
  let html = "";

  let titleString = "Facility Minerals";
  let facilityName =
    transientState.selectedFacilityId !== undefined ? `${getFacilityById(transientState.selectedFacilityId).name}` : 0;

  if (facilityName) {
    titleString += ` for ${facilityName}`;
    let facilityMinerals = getFacilityMinerals(transientState.selectedFacilityId);

    // console.log("facilityMinerals", facilityMinerals);
  }

  html += `<h3 class="text-center">${titleString}</h3>`;

  return html;
};
