import { getTransientState, getFacilities, setFacility } from "./database.js";

export const Facilities = () => {
  let transientState = getTransientState();
  const facilities = getFacilities();

  let html = "";

  html += '<label for="facilitySelect">Facility: </label>';
  html += '<select id="facilitySelect">';
  html += '<option value="0">Choose a facility...</option>';

  const arrayOfOptions = facilities.map((facility) => {
    let string = "";
    string += `<option value="${facility.id}"`;

    if (facility.id === transientState.selectedFacilityId) {
      string += " selected";
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
