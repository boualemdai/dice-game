"use strict";
const rollDice = document.querySelector(".roll-dice");
const dice = document.querySelector(".dice");
const ply1 = document.querySelector(".ply1");
const ply2 = document.querySelector(".ply2");
const hold = document.querySelector(".hold");
const scorePly1 = document.querySelector(".score-ply1");
const scorePly2 = document.querySelector(".score-ply2");
const newGame = document.querySelector(".new-game");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
let playerNumber = 1;
let randomFace;
rollDice.addEventListener("click", () => {
  randomFace = Math.ceil(Math.random() * 6);

  if (playerNumber === 1) {
    if (randomFace !== 1) {
      dice.innerHTML = `<img src="./${randomFace}.png" alt="dice-face">`;
      ply1.textContent = Number(ply1.textContent) + randomFace;
    } else {
      dice.innerHTML = `<img src="./${randomFace}.png" alt="dice-face">`;
      ply1.textContent = 0;
      first.classList.remove("actuelPlyer");
      second.classList.add("actuelPlyer");
      playerNumber = 2;
    }
  } else if (playerNumber === 2) {
    randomFace = Math.ceil(Math.random() * 6);
    if (randomFace !== 1) {
      dice.innerHTML = `<img src="./${randomFace}.png" alt="dice-face">`;
      ply2.textContent = Number(ply2.textContent) + randomFace;
    } else {
      dice.innerHTML = `<img src="./${randomFace}.png" alt="dice-face">`;
      first.classList.add("actuelPlyer");
      second.classList.remove("actuelPlyer");
      ply2.textContent = 0;
      playerNumber = 1;
    }
  }
});

hold.addEventListener("click", () => {
  if (playerNumber === 1) {
    scorePly1.textContent =
      Number(scorePly1.textContent) + Number(ply1.textContent);
    if (Number(scorePly1.textContent) < 100) {
      ply1.textContent = "0";
      first.classList.remove("actuelPlyer");
      second.classList.add("actuelPlyer");
      playerNumber = 2;
    } else {
      first.classList.add("winner");
      playerNumber = 3;
    }
  } else if (playerNumber === 2) {
    scorePly2.textContent =
      Number(scorePly2.textContent) + Number(ply2.textContent);
    if (Number(scorePly2.textContent) < 100) {
      ply2.textContent = "0";
      first.classList.add("actuelPlyer");
      second.classList.remove("actuelPlyer");
      playerNumber = 1;
    } else {
      second.classList.add("winner");
      playerNumber = 3;
    }
  }
});

newGame.addEventListener("click", () => {
  ply1.textContent = "0";
  ply2.textContent = "0";
  scorePly1.textContent = "0";
  scorePly2.textContent = "0";
  playerNumber = 1;
  first.classList.add("actuelPlyer");
  second.classList.remove("actuelPlyer");
  first.classList.remove("winner");
  second.classList.remove("winner");
  dice.innerHTML = "";
});
