import { getTransientState, getColonyById, getColonyMinerals, getMineralById } from "./database.js";

export const ColonyMinerals = () => {
  let transientState = getTransientState();
  let html = "";

  let titleName = "Colony";
  let titleString = "Minerals";
  let listItemsString = "";

  if (transientState.selectedColonyId !== undefined) {
    titleName = `${getColonyById(transientState.selectedColonyId).name}`;
    let colonyMinerals = getColonyMinerals(transientState.selectedColonyId);

    listItemsString += "<ul class='text-center no-bullets'>";

    const listItemsArray = colonyMinerals.map((colonyMineral) => {
      return `
        <li class="mt-0 colony-mineral">
            ${colonyMineral.quantity} tons of ${getMineralById(colonyMineral.mineralId).name}
        </li>`;
    });
    listItemsString += listItemsArray.join("");

    listItemsString += "</ul>";
  }

  html += `<h3 class="mt-0 text-center">${titleName} ${titleString}</h3>`;
  html += `${listItemsString}`;

  return html;
};
