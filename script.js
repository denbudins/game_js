let playerScore = 0;
let computerScore = 0;
let choices = ["rock", "paper", "scissors"];

function randomNum() {
    let result = Math.floor(Math.random() * 3);
    return result;
}

function rockPaperScissors(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        console.log("tie")
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        playerScore++;
        // console.log("player won, ", `score: player ${playerScore} - computer ${computerScore}`)
        
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        // console.log("computer won, ", `score: player ${playerScore} - computer ${computerScore}`)
        
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        // console.log("computer won, ", `score: player ${playerScore} - computer ${computerScore}`)
        
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        playerScore++;
        // console.log("player won, ", `score: player ${playerScore} - computer ${computerScore}`)
        
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        // console.log("computer won, ", `score: player ${playerScore} - computer ${computerScore}`)
        
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        playerScore++;
        // console.log("player won, ", `score: player ${playerScore} - computer ${computerScore}`)
        
    }
    document.getElementById("user-score").innerHTML = playerScore;
    document.getElementById("computer-score").innerHTML = computerScore;
    document.getElementById("computer-choice").innerHTML = computerChoice;
}


document.getElementById("paper").addEventListener("click", () => rockPaperScissors("paper", choices[randomNum()]));
document.getElementById("rock").addEventListener("click", () => rockPaperScissors("rock", choices[randomNum()]));
document.getElementById("scissors").addEventListener("click", () => rockPaperScissors("scissors", choices[randomNum()]));











    

