const userScore = document.querySelector("#user-score");
const computerScore = document.querySelector("#computer-score");
const userChoiceD = document.querySelector("#user-choice");
const computerChoiceD = document.querySelector("#computer-choice");
const statusGame = document.querySelector("#status");

const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");

const rps = ["rock", "paper", "scissors"];

let computerChoice;
let userChoice;
let gstatus;

// function for computer/robot
function robotChoice() {
  let computerNumber = Math.floor(Math.random() * 3);
  computerChoiceD.innerHTML = rps[computerNumber];
  //ovdje nije potrebno raditi ovu provjeru
  //objašnjenje provjere?
  if (computerNumber === 0) {
    computerChoice = rps[computerNumber];
    console.log(`computer picks: ${rps[computerNumber]} `);
  }
  if (computerNumber === 1) {
    computerChoice = rps[computerNumber];
    console.log(`computer picks: ${rps[computerNumber]} `);
  }
  if (computerNumber === 2) {
    computerChoice = rps[computerNumber];
    console.log(`computer picks: ${rps[computerNumber]} `);
  }
  computerChoiceD.innerHTML = computerChoice;
}

function triggerElement(event) {
  userChoice = event.target.id;
  userChoiceD.innerHTML = userChoice;

  robotChoice();
  getStatus();
  giveScore();
}

function game() {
  rock.addEventListener("click", (event) => {
    triggerElement(event);
    console.log(`user picks: Rock`);
  });

  paper.addEventListener("click", (event) => {
    triggerElement(event);
    console.log(`user picks: Paper`);
  });

  scissors.addEventListener("click", (event) => {
    triggerElement(event);
    console.log(`user picks: Scissors`);
  });
}

game();

let computerPoints = 0;
let userPoints = 0;

function getStatus() {
  if (computerChoice === userChoice) {
    gstatus = "It is a Draw!";
    console.log(`It's a Draw`);
    //colors
    removeC();
    computerScore.classList.add("oColor");
    userScore.classList.add("oColor");
    statusGame.classList.add("oColor");
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    gstatus = "You are Winner!";
    console.log(`You are Winner!`);
    userPoints += 1;
    //colors
    removeC();
    userScore.classList.add("gColor");
    computerScore.classList.add("rColor");
    statusGame.classList.add("gColor");
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    gstatus = "You Lost!";
    console.log(`You Lost!`);
    computerPoints += 1;
    //colors
    removeC();
    userScore.classList.add("rColor");
    computerScore.classList.add("gColor");
    statusGame.classList.add("rColor");
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    gstatus = "You are Winner!";
    console.log(`You are Winner!`);
    userPoints += 1;
    //colors
    removeC();
    userScore.classList.add("gColor");
    computerScore.classList.add("rColor");
    statusGame.classList.add("gColor");
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    gstatus = "You Lost!";
    console.log(`You Lost!`);
    computerPoints += 1;
    //colors
    removeC();
    userScore.classList.add("rColor");
    computerScore.classList.add("gColor");
    statusGame.classList.add("rColor");
  }

  if (computerChoice === "scissors" && userChoice === "rock") {
    gstatus = "You are Winner!";
    console.log(`You are Winner!`);
    userPoints += 1;
    //colors
    removeC();
    userScore.classList.add("gColor");
    computerScore.classList.add("rColor");
    statusGame.classList.add("gColor");
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    gstatus = "You Lost!";
    console.log(`You Lost!`);
    computerPoints += 1;
    //colors
    removeC();
    userScore.classList.add("rColor");
    computerScore.classList.add("gColor");
    statusGame.classList.add("rColor");
  }

  statusGame.innerHTML = gstatus;
}

function giveScore() {
  userScore.innerHTML = userPoints;
  computerScore.innerHTML = computerPoints;
}

function removeC() {
  computerScore.classList.remove("rColor");
  computerScore.classList.remove("gColor");
  computerScore.classList.remove("oColor");
  userScore.classList.remove("rColor");
  userScore.classList.remove("gColor");
  userScore.classList.remove("oColor");
  statusGame.classList.remove("rColor");
  statusGame.classList.remove("gColor");
  statusGame.classList.remove("oColor");
}
