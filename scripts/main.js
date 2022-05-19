import { Exomine } from "./Exomine.js";
import { Orders } from "./Cart.js";
const mainContainer = document.querySelector("#exomine");

const renderAllHTML = () => {
  mainContainer.innerHTML = Exomine();
};

renderAllHTML();

document.addEventListener("stateChanged", (event) => {
  renderAllHTML();
});

const renderCart = () => {
  const spaceCart = document.querySelector("#spaceCart");
  spaceCart.innerHTML = Orders();
};

document.addEventListener("cartChanged", (event) => {
  renderCart();
});
