import { setGovernor, getActiveGovernors, getTransientState, setColony } from "./database.js";

// create dropdown menu populated with active governors
export const Governors = () => {
  const transientState = getTransientState()
  // let selectedGovernorId =
  // typeof transientState.selectedGovernorId !== "undefined" && transientState.selectedGovernorId
  // ? transientState.selectedGovernorId
  // : 0;
  const governors = getActiveGovernors()
  let html = "";
  
  html += '<label for="governorSelect">Choose Governor: </label>';
  html += '<select id="governorSelect">';
  html += '<option value="0">Select a Governor</option>';
  
  const arrayOfOptions = governors.map((governor) => {
    let string = ""
    string += `<option value="${governor.id}--${governor.colonyId}">`;
    
    if (governor.id === transientState.selectedGovernorId) {
      string += "selected";
    }
    string += `${governor.name}</option>`;
    
    return string;
  });
  
  html += arrayOfOptions.join("");
  html += "</select>";
  
  return html
}
document.addEventListener(
  "change",
  (event) => {
    if (event.target.id === "governorSelect") {
      const [governorId, colonyId] = event.target.value.split("--");
      setGovernor(parseInt(governorId))
      setColony(parseInt(colonyId))
      console.log(getTransientState())
    }
  }
  )
// populate colony name text based on selected governor