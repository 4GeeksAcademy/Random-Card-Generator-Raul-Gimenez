export function cardNumber() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  let twoToTenNumber =
    randomNumber >= 2 && randomNumber <= 10 ? randomNumber : "";
  let numberCard = {
    1: "A",
    11: "J",
    12: "Q",
    13: "K",
    [twoToTenNumber]: randomNumber,
  };
  return numberCard[randomNumber];
}
