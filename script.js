const optRock = document.getElementById("rock");
const optPaper = document.getElementById("paper");
const optScissors = document.getElementById("scissors");


let computerChoice;
let myChoice;

const combinations = {
    rock: {losesTo: "paper", winsTo: "scissors"},
    paper: {losesTo: "scissors", winsTo: "rock"},
    scissors: {losesTo: "rock", winsTo: "paper"}
}

let computerScore = 0;
let myScore = 0;

let winStatus = document.getElementById("status");
let computerChoiceStatus = document.getElementById("computer-choice");


function whoWon (myChoice, computerChoice){

    if(combinations[myChoice].winsTo == computerChoice){
        myScore ++;
        winStatus.textContent = "You win";
        document.getElementById("user-score").textContent = myScore;
    }
    else if(combinations[myChoice].losesTo == computerChoice){
        computerScore ++;
        winStatus.textContent = "Computer wins";
        document.getElementById("computer-score").textContent = computerScore;
    }
    else{
        winStatus.textContent = "Tie";
    }
}

function makeComputerChoice(){
    let i = Math.floor(Math.random() * 3 + 1);

    switch(i){
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
    }

    computerChoiceStatus.textContent = computerChoice;

}

optRock.addEventListener("click", function (e) {

    myChoice = "rock";

    makeComputerChoice();

    whoWon(myChoice, computerChoice);
} );

optPaper.addEventListener("click", function (e) {

    myChoice = "paper";

    makeComputerChoice();

    whoWon(myChoice, computerChoice);
} );

optScissors.addEventListener("click", function (e) {

    myChoice = "scissors";

    makeComputerChoice();

    whoWon(myChoice, computerChoice);
} );

