import {
  getTransientState,
  getColonyById,
  getColonyMinerals,
  getMineralById,
  QuantityMineralsTextBuilder
} from "./database.js";

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
      let mineral = getMineralById(colonyMineral.mineralId);
      return `
        <li class="mt-0 colony-mineral">
            ${QuantityMineralsTextBuilder(colonyMineral.quantity, mineral.name)}
        </li>`;
    });

    listItemsString += listItemsArray.join("");

    listItemsString += "</ul>";
  }

  html += `<h3 class="mt-0 text-center">${titleName} ${titleString}</h3>`;
  html += `${listItemsString}`;

  return html;
};
