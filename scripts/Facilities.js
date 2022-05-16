import { getTransientState, getFacilities } from "./database.js";

export const Facilities = () => {
  let transientState = getTransientState();
  const facilities = getFacilities();

  let html = "";

  html += '<label for="facilitySelect">Choose facility: </label>';
  html += '<select id="facilitySelect">';
  html += '<option value="0">Select a facility</option>';

  const arrayOfOptions = facilities.map((facility) => {
    let string = "";
    string += `<option value="${facility.id}--${facility.name}">`;

    if (facility.id === transientState.selectedfacilityId) {
      string += "selected";
    }
    string += `${facility.name}</option>`;

    return string;
  });

  html += arrayOfOptions.join("");
  html += "</select>";

  return html;
};
