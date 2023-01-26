const player1total = document.querySelector("#player-1-total");
const player2total = document.querySelector("#player-2-total");
const player1current = document.querySelector("#player-1-current");
const player2current = document.querySelector("#player-2-current");
const newGame = document.querySelector("#new-game-btn"); //new game btn
const rollDice = document.querySelector("#roll-dice-btn"); // roll dice btn
const hold = document.querySelector("#hold"); // hold btn

let currentPlayer1 = 0;
let currentPlayer2 = 0;

rollDice.addEventListener("click", function () {
  let dice1 = document.querySelector("#dice-1");
  console.log(dice1);
  const firstRandomNum = Math.floor(Math.random() * 6) + 1;
  console.log(firstRandomNum);
  const firstDiceImg = "Assets/dice" + firstRandomNum + ".png";
  console.log(firstDiceImg);
  dice1.setAttribute("src", firstDiceImg);
  let dice2 = document.querySelector("#dice-2");
  console.log(dice1);
  const secondeRandomNum = Math.floor(Math.random() * 6) + 1;
  console.log(firstRandomNum);
  const secondeDiceImg = "Assets/dice" + secondeRandomNum + ".png";
  console.log(firstDiceImg);
  dice2.setAttribute("src", secondeDiceImg);
  if (firstRandomNum === 6 && secondeRandomNum === 6) {
    player1current.innerText = 0;
  } else {
    currentPlayer1 += firstRandomNum + secondeRandomNum;
    player1current.innerText = currentPlayer1;
  }
});

hold.addEventListener("click", function () {
  player1total.innerText = currentPlayer1;
});
