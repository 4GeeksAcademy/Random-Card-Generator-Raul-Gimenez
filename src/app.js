import { cardColor } from "./components/cardColor.js";
import { cardNumber } from "./components/cardNumber.js";
import { asignColor } from "./components/asignColor.js";

const cardColorElement = cardColor();
const frontNumber = document.querySelector("#frontNumber");
const upAndBottomCardColor = document.querySelectorAll("#upCardColor, #bottomCardColor");

frontNumber.append(cardNumber());
upAndBottomCardColor.forEach((element) => {
  return element.append(asignColor(cardColorElement));
});

