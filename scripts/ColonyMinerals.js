import { getTransientState, getColonyById, getColonyMinerals } from "./database.js";

export const ColonyMinerals = () => {
  let transientState = getTransientState();
  let html = "";

  let titleName = "Colony";
  let titleString = "Minerals";

  if (transientState.selectedColonyId !== undefined) {
    titleName = `${getColonyById(transientState.selectedColonyId).name}`;
    let colonyMinerals = getColonyMinerals(transientState.selectedColonyId);

    // console.log("colonyMinerals", colonyMinerals);
  }

  html += `<h3 class="mt-0">${titleName} ${titleString}</h3>`;

  return html;
};
