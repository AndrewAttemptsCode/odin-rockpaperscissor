// Create a function for the computer's choice.
// Computer's choice needs to be random of 3 choices:
// Rock, Paper or Scissors.

// Create random number for each move (rock, paper and scissors)
// randomNumber generates 3 numerical choices (1, 2 and 3)
// Assign each move to a value
// Return the value and log to the console

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    
    if (randomNumber === 1) {
        computerChoice = "rock";
        console.log("Rock");
    } else if (randomNumber === 2) {
        computerChoice = "paper";
        console.log("Paper");
    } else if (randomNumber === 3) {
        computerChoice = "scissors";
        console.log("Scissors");
    }
    return computerChoice;
}

// Two variables containing the moves for both player and computer.

const playerSelection = "rock";
const computerSelection = getComputerChoice();

// Function to play a single round of Rock, Paper Scissors.
// Takes input from the variables.
// Decides winner based on the move hierarchy.

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let roundOutcome;
// If both selections are the same, it's a draw.
    if (playerSelection === computerSelection) {
        roundOutcome = "It's a draw.";
        console.log("It's a draw.");
// Check all win conditions for the player.
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        roundOutcome = "You win.";
        console.log("You win.");
// If not a draw and not a player win, computer wins.
    } else {
        roundOutcome = "You lose.";
        console.log("You lose.");
    }
    return roundOutcome;
}

console.log(playRound(playerSelection, computerSelection));
