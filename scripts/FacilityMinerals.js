import { getTransientState, getFacilityById } from "./database.js";

export const FacilityMinerals = () => {
  let transientState = getTransientState();
  let html = "";
  let titleString = "Facility Minerals";

  if (transientState.selectedFacilityId !== undefined) {
    titleString = getFacilityById(transientState.selectedFacilityId).name;
  }
  html += `<h4>${titleString}</h4>`;

  return html;
};
