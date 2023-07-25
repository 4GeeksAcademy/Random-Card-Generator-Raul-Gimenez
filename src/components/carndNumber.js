const cardNumber = () => {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  let numberArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  let numberCard = {
    1 : "A",
    11 : "J",
    12 : "Q",
    13 : "K",
    [2-10] : randomNumber
  };
  return numberCard[randomNumber];
};

console.log(cardNumber());
