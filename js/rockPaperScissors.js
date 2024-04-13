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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
// If both selections are the same, it's a draw.
    if (playerSelection === computerSelection) {
        alert(`You picked, ${playerSelection}.\nThe computer picked, ${computerSelection}.\n\nIT'S A DRAW!`);
// Check all win conditions for the player.
// Add 1 to player score.
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        alert(`You picked, ${playerSelection}.\nThe computer picked, ${computerSelection}.\n\nYOU WIN!`)
// If not a draw and not a player win, computer wins.
// Add 1 to computer score.
    } else {
        computerScore++;
        alert(`You picked, ${playerSelection}.\nThe computer picked, ${computerSelection}.\n\nYOU LOSE.`);
    }
}

function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        const playerSelection = prompt("Enter a move (Rock, Paper or Scissors): ");
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }

    let resultMessage = playerScore === computerScore ? "IT'S A DRAW" : playerScore > computerScore ? "YOU WIN!" : "YOU LOSE.";
        alert(`FINAL SCORE\n\nYour score: ${playerScore}/${rounds}\nComputer score: ${computerScore}/${rounds}\n\n${resultMessage}`);
}

let playerScore = 0;
let computerScore = 0;

playGame(5);