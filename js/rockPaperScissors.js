let playerScore = 0;
let computerScore = 0;

const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
const results = document.querySelector("#results");
const scoreboard = document.querySelector("#scoreboard");

buttonRock.addEventListener("click", () => playRound("rock"));
buttonPaper.addEventListener("click", () => playRound("paper"));
buttonScissors.addEventListener("click", () => playRound("scissors"));


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    
    if (randomNumber === 1) {
        computerChoice = "rock";
    } else if (randomNumber === 2) {
        computerChoice = "paper";
    } else if (randomNumber === 3) {
        computerChoice = "scissors";
    }
    return computerChoice;
}


function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let resultMessage;

    // If both selections are the same, it's a draw.
    if (playerSelection === computerSelection) {
        resultMessage = `You picked, ${playerSelection}.\nThe computer picked, ${computerSelection}.\n\nIT'S A DRAW!`;
    // Check all win conditions for the player.
    // Add 1 to player score.
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        resultMessage = `You picked, ${playerSelection}.\nThe computer picked, ${computerSelection}.\n\nYOU WIN!`;
    // If not a draw and not a player win, computer wins.
    // Add 1 to computer score.
    } else {
        computerScore++;
        resultMessage = `You picked, ${playerSelection}.\nThe computer picked, ${computerSelection}.\n\nYOU LOSE.`;
    }

    results.textContent = resultMessage;
    scoreboard.textContent = `Player: ${playerScore}/5 Computer: ${computerScore}/5`;

    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
}


function endGame() {
    results.textContent = playerScore === 5 ? "You win the game" : "You lose the game.";
}