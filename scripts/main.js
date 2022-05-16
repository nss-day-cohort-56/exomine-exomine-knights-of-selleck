import { Exomine } from "./Exomine.js";
const mainContainer = document.querySelector("#exomine");

const renderAllHTML = () => {
  mainContainer.innerHTML = Exomine();
};

renderAllHTML();

document.addEventListener("stateChanged", (event) => {
  renderAllHTML();
});
