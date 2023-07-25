export const cardColor = () => {
  let randomNumber = Math.floor(Math.random() * 4);
  let colorCard = {
    0: "fi fi-ss-heart red",
    1: "fi fi-ss-rhombus red",
    2: "fi fi-ss-club",
    3: "fi fi-ss-spade",
  };
  return colorCard[randomNumber];
};
