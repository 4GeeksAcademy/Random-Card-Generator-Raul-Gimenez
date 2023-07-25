import { cardColor } from "./components/cardColor.js";
import { cardNumber } from "./components/cardNumber.js";

const cardColorElement = cardColor();
const frontNumber = document.querySelector("#frontNumber");
const upCardColor = document.querySelector("#upCardColor");
const bottomCardColor = document.querySelector("#bottomCardColor");

frontNumber.append(cardNumber()) && bottomCardColor.append(cardColorElement);
upCardColor.innerHTML = `<i class="${cardColorElement}"></i>`;
bottomCardColor.innerHTML = `<i class="${cardColorElement}"></i>`;
