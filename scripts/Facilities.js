import { getTransientState, getFacilities, setFacility } from "./database.js";

export const Facilities = () => {
  let transientState = getTransientState();
  const facilities = getFacilities();

  let html = "";

  html += '<label for="facilitySelect">Choose a facility: </label>';
  transientState.selectedGovernorId
    ? (html += '<select id="facilitySelect">')
    : (html += '<select disabled id="facilitySelect">');
  html += '<option value="0">Facilities... </option>';

  const arrayOfOptions = facilities.map((facility) => {
    let string = "";
    string += `<option value="${facility.id}"`;

    if (facility.id === transientState.selectedFacilityId) {
      string += " selected";
    } else if (facility.active === false) {
      string += "disabled"
    }
    string += `>${facility.name}</option>`;

    return string;
  });

  html += arrayOfOptions.join("");
  html += "</select>";

  return html;
};

document.addEventListener("change", (event) => {
  if (event.target.id === "facilitySelect") {
    const facilityId = event.target.value;
    setFacility(parseInt(facilityId));
  }
});
