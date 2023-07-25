const cardColor = () => {
  let randomNumber = Math.floor(Math.random() * 4);
  let colorCard = {
    0: "heart",
    1: "diamonds",
    2: "pikes",
    3: "clovers"
  };
  return colorCard[randomNumber];
};

console.log(cardColor());
