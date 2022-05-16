import { getTransientState, getFacilityById } from "./database.js";

export const FacilityMinerals = () => {
  let transientState = getTransientState();
  let html = "";

  let titleString = "Facility Minerals";
  let facilityName =
    transientState.selectedFacilityId !== undefined ? `${getFacilityById(transientState.selectedFacilityId).name}` : 0;

  if (facilityName) {
    titleString += ` for ${facilityName}`;
  }

  html += `<h3>${titleString}</h3>`;

  return html;
};
