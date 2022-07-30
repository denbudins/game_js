const paperImg = document.getElementById("paper");
const scissorsImg = document.getElementById("scissors");
const rockImg = document.getElementById("rock");
let computerChoice = document.getElementById("computer-choice");
const computerScore = document.getElementById("computer-score");
const myScore = document.getElementById("user-score");

const answersArray = ["paper", "scissors", "rock"];
let myScoreCounter = 0;
let computerScoreCounter = 0;

paperImg.addEventListener("click", myPaperAnswer);
scissorsImg.addEventListener("click", myScissorsAnswer);
rockImg.addEventListener("click", myRockAnswer);

function generateRobotAnswer() {
    return answersArray[Math.floor(Math.random() * 3)];
}

function setMyScore() {
    myScoreCounter++;
    myScore.innerHTML = myScoreCounter;
}

function setComputerScore() {
    computerScoreCounter++;
    computerScore.innerHTML = computerScoreCounter;
}

function myPaperAnswer() {
    let computerAnswer = generateRobotAnswer();
    computerChoice.innerHTML = computerAnswer;
    switch (computerAnswer) {
        case "rock":
            setMyScore();
            break;
        case "scissors":
            setComputerScore();
            break;
    }
}

function myScissorsAnswer() {
    let computerAnswer = generateRobotAnswer();
    computerChoice.innerHTML = computerAnswer;
    switch (computerAnswer) {
        case "paper":
            setMyScore();
            break;
        case "rock":
            setComputerScore();
            break;
    }
}

function myRockAnswer() {
    let computerAnswer = generateRobotAnswer();
    computerChoice.innerHTML = computerAnswer;
    switch (computerAnswer) {
        case "scissors":
            setMyScore();
            break;
        case "paper":
            setComputerScore();
            break;
    }
}
