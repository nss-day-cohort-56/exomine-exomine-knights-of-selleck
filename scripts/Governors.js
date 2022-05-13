import { getGovernors, setGovernor, getActiveGovernors, getTransientState } from "./database.js";

// const governors = getGovernors()
const activeGovernors = getActiveGovernors()

document.addEventListener(
  "change",
  (event) => {
      if (event.target.id === "governor") {
          setGovernor(parseInt(event.target.value))
      }
  }
)

// create dropdown menu populated with active governors
export const Governors = () => {
  let html = "<h2>Interiors</h2>"

  html += '<select id="governorSelect">'
  html += '<option value="0">Choose a Governor</option>'
  
  // iterate through governors to find active
  for (const governor of activeGovernors) {
      html += `<option value="${governor.id}">${governor.name}</option>`
  }

  html += "</select>"
  
  return html
}
// create function to match colonyId and governor Id
// populate colony name text based on selected governor

// export const Governors = () => {
//   let transientState = getTransientState();
//   let html = "";

//   return html;
// };
