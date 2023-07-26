import { cardColor } from "./components/cardColor.js";
import { cardNumber } from "./components/cardNumber.js";
import { asignColor } from "./components/asignColor.js";

const cardColorElement = cardColor();
const frontNumber = document.querySelector("#frontNumber");
const upCardColor = document.querySelectorAll("#upCardColor, #bottomCardColor");
//const bottomCardColor = document.querySelector("#bottomCardColor");

frontNumber.append(cardNumber());
upCardColor.forEach((element) => {
  return element.append(asignColor(cardColorElement));
});

//bottomCardColor.append(asignColor(cardColorElement));
