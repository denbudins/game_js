let robotScore = 0;
let playerScore = 0;

const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const computerChoice = document.getElementById("computer-choice");
const choices = ["rock", "paper", "scissors"];
let status1 = document.getElementById("status");
let userScore = document.getElementById("user-score");
let computerScore = document.getElementById("computer-score");

///// PAPER event listener //////////////////////////////////////////////////////
paper.addEventListener("click", function (e) {
  robotChoice();
  displayWinner(e.target.id, robotChoice());

  displayScore();
  computerChoice.style.color = getRandomColor();
});

///// ROCK event listener ///////////////////////////////////////////////////////
rock.addEventListener("click", function (e) {
  robotChoice();
  displayWinner(e.target.id, robotChoice());

  displayScore();
  computerChoice.style.color = getRandomColor();
});

///// SCISSORS event listener //////////////////////////////////////////////////
scissors.addEventListener("click", function (e) {
  robotChoice();
  displayWinner(e.target.id, robotChoice());

  displayScore();
  computerChoice.style.color = getRandomColor();
});

////// Randomize the robot's choice /////////////////////////////////////////////

function robotChoice() {
  let choice = choices[Math.floor(Math.random() * choices.length)];
  computerChoice.innerHTML = choice;
  return choice;
}

////// Generator random boje u svrhu vidljivosti //////////////////////////////////

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/////// Score displayer ////////////////////////////////////////////////////////////

function displayScore() {
  computerScore.innerHTML = robotScore;
  userScore.innerHTML = playerScore;
}

/////// BATTLE //////////////////////////////////////////////////////////////////////

function displayWinner(playerChoice, computerChoice) {
  if (playerChoice === "paper" && computerChoice === "paper") {
    status1.innerHTML = "Tie";
  } else if (playerChoice === "rock" && computerChoice === "rock") {
    status1.innerHTML = "Tie";
  } else if (playerChoice === "scissors" && computerChoice === "scissors") {
    status1.innerHTML = "Tie";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    status1.innerHTML = "You win!";

    playerScore++;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    status1.innerHTML = "You win!";

    playerScore++;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    status1.innerHTML = "You win!";

    playerScore++;
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    status1.innerHTML = "You LOSE!";

    robotScore++;
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    status1.innerHTML = "You LOSE!";

    robotScore++;
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    status1.innerHTML = "You LOSE!";

    robotScore++;
  }
}
