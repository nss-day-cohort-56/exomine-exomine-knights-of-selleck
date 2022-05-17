import { setGovernor, getActiveGovernors, getTransientState, setColony } from "./database.js";

export const Governors = () => {
  let transientState = getTransientState();
  let governors = getActiveGovernors();
  let html = "";

  html += '<label for="governorSelect">Choose a governor: </label>';
  html += '<select id="governorSelect">';
  html += '<option value="0">Governors... </option>';

  const arrayOfOptions = governors.map((governor) => {
    let string = "";
    string += `<option value="${governor.id}--${governor.colonyId}"`;

    if (governor.id === transientState.selectedGovernorId) {
      string += " selected";
    }
    string += `>${governor.name}</option>`;

    return string;
  });

  html += arrayOfOptions.join("");
  html += "</select>";

  return html;
};

document.addEventListener("change", (event) => {
  if (event.target.id === "governorSelect") {
    const [governorId, colonyId] = event.target.value.split("--");
    setGovernor(parseInt(governorId));
    setColony(parseInt(colonyId));
  }
});
