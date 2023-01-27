"use strict";
const newGame = document.querySelector("#new-game-btn"); //new game btn
const rollDice = document.querySelector("#roll-dice-btn"); // roll dice btn
const hold = document.querySelector("#hold"); // hold btn
const player1total = document.querySelector("#player-1-total"); //total player 1 amount
const player2total = document.querySelector("#player-2-total"); //total player 2 amount
const player1current = document.querySelector("#player-1-current");
const player2current = document.querySelector("#player-2-current");
const player1Win = document.querySelector("#win1");
const player2Win = document.querySelector("#win2");
const player1Div = document.querySelector("#player-1-div");
const player2Div = document.querySelector("#player-2-div");
const playerTitle1 = document.querySelector(".player1"); //player 1 title
const playerTitle2 = document.querySelector(".player2"); // player 2 title
const winMessage1 = document.querySelector(".winMessage1"); //win meaage -1
const winMessage2 = document.querySelector(".winMessage2"); //win meaage -2
const inputTarget = document.querySelector("#inputTarget"); //input
const btnTarget = document.querySelector("#btn-target"); //btn tardet
const modal = document.querySelector("#modal");
const select = document.querySelector(".select");

const sfx = {
  push: new Howel({
    src: [],
  }),
};

let teragetInput = Number(inputTarget.value);

function inputTarget1() {
  if (Number(inputTarget.value) < 100) {
    select.textContent = "THE TARGET NUMBER SHOULD BE BETWEEN 100 - 500";
  } else {
    teragetInput += Number(inputTarget.value);
    console.log(teragetInput);
    modal.style.visibility = "hidden";
  }
}

btnTarget.addEventListener("click", function () {
  inputTarget1();
});

let totalPlayer1 = 0;
let totalPlayer2 = 0;
let currentPlayer1 = 0;
let currentPlayer2 = 0;
let IsPlayer1 = true;

rollDice.addEventListener("click", function () {
  if (IsPlayer1) {
    let dice1 = document.querySelector("#dice-1");
    const firstRandomNum = Math.floor(Math.random() * 6) + 1;
    const firstDiceImg = "Assets/dice" + firstRandomNum + ".png";
    dice1.setAttribute("src", firstDiceImg);
    let dice2 = document.querySelector("#dice-2");
    const secondeRandomNum = Math.floor(Math.random() * 6) + 1;
    const secondeDiceImg = "Assets/dice" + secondeRandomNum + ".png";
    dice2.setAttribute("src", secondeDiceImg);
    if (firstRandomNum === 6 && secondeRandomNum === 6) {
      player1current.innerText = 0;
      currentPlayer1 = 0;
    } else {
      currentPlayer1 += firstRandomNum + secondeRandomNum;
      player1current.innerText = currentPlayer1;
    }
  } else {
    let dice1 = document.querySelector("#dice-1");
    console.log(dice1);
    const firstRandomNum = Math.floor(Math.random() * 6) + 1;
    const firstDiceImg = "Assets/dice" + firstRandomNum + ".png";
    dice1.setAttribute("src", firstDiceImg);
    let dice2 = document.querySelector("#dice-2");
    const secondeRandomNum = Math.floor(Math.random() * 6) + 1;
    const secondeDiceImg = "Assets/dice" + secondeRandomNum + ".png";
    dice2.setAttribute("src", secondeDiceImg);
    if (firstRandomNum === 6 && secondeRandomNum === 6) {
      player2current.innerText = 0;
      currentPlayer2 = 0;
    } else {
      currentPlayer2 += firstRandomNum + secondeRandomNum;
      player2current.innerText = currentPlayer2;
    }
  }
  isThereWin();
});

hold.addEventListener("click", function () {
  if (IsPlayer1) {
    totalPlayer1 += currentPlayer1;
    currentPlayer1 = 0;
    player1total.textContent = totalPlayer1;
    player1current.textContent = currentPlayer1;
    player2Div.style.backgroundColor = "rgba(255, 255, 255, 0.504)";
    player1Div.style.backgroundColor = "rgba(255, 255, 255, 0.211)";
  } else {
    totalPlayer2 += currentPlayer2;
    currentPlayer2 = 0;
    player2total.textContent = totalPlayer2;
    player2current.textContent = currentPlayer2;
    player2Div.style.backgroundColor = "rgba(255, 255, 255, 0.211)";
    player1Div.style.backgroundColor = "rgba(255, 255, 255, 0.504)";
  }
  IsPlayer1 = !IsPlayer1;
});

function isThereWin() {
  if (
    Number(
      player1current.textContent === teragetInput ||
        Number(player2current.textContent) > teragetInput
    )
  ) {
    player1Win.style.visibility = "visible";
    player1Div.style.backgroundColor = "#333";
    player1total.style.color = "#c7365f";
    player1total.style.fontSize = "5rem";
    playerTitle1.style.color = "#c7365f";
    winMessage1.style.color = "#c7365f";
  } else if (
    Number(
      player2current.textContent === teragetInput ||
        Number(player1current.textContent) > teragetInput
    )
  ) {
    player2Win.style.visibility = "visible";
    player2Win.style.visibility = "visible";
    player2Div.style.backgroundColor = "#333";
    player2total.style.color = "#c7365f";
    player2total.style.fontSize = "5rem";
    playerTitle2.style.color = "#c7365f";
    winMessage2.style.color = "#c7365f";
  } else {
    player1Win.style.visibility = "hidden";
    player2Win.style.visibility = "hidden";
  }
}

newGame.addEventListener("click", function () {
  resetGame();
});

function resetGame() {
  totalPlayer1 = 0;
  totalPlayer2 = 0;
  currentPlayer1 = 0;
  currentPlayer2 = 0;
  IsPlayer1 = true;
  player1total.textContent = totalPlayer1;
  player2total.textContent = totalPlayer2;
  player1current.textContent = currentPlayer1;
  player2current.textContent = currentPlayer2;
  player1total.style.fontSize = "4rem";
  player2total.style.fontSize = "4rem";
  playerTitle1.style.color = "#333";
  playerTitle2.style.color = "#333";
  player1Div.style.backgroundColor = "rgba(255, 255, 255, 0.504)";
  player2Div.style.backgroundColor = "rgba(255, 255, 255, 0.211)";
  isThereWin();
}
