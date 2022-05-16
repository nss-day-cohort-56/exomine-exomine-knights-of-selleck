import { getTransientState,  getColonyById} from "./database.js";

export const ColonyMinerals = () => {
  let transientState = getTransientState();
  let html = "";

  let titleString =
    transientState.selectedColonyId !== undefined ? `${getColonyById(transientState.selectedColonyId).name} Minerals` : "Colony Minerals";

  html += `<h3 class="mt-0">${titleString}</h3>`;

  return html;
}

