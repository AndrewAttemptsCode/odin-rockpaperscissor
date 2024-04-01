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
        // alert("The computer picked, Rock.");
    } else if (randomNumber === 2) {
        computerChoice = "paper";
        // alert("The computer picked, Paper.");
    } else if (randomNumber === 3) {
        computerChoice = "scissors";
        // alert("The computer picked, Scissors.");
    }
    return computerChoice;
}

// Function to play a single round of Rock, Paper Scissors.
// Takes input from the variables.
// Decides winner based on the move hierarchy.
// Return correct round statement in the console.

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
// If both selections are the same, it's a draw.
    if (playerSelection === computerSelection) {
        alert(`You picked, ${playerSelection}.\nThe computer picked, ${computerSelection}.\n\nIT'S A DRAW!`);
// Check all win conditions for the player.
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        alert(`You picked, ${playerSelection}.\nThe computer picked, ${computerSelection}.\n\nYOU WIN!`)
// If not a draw and not a player win, computer wins.
    } else {
        alert(`You picked, ${playerSelection}.\nThe computer picked, ${computerSelection}.\n\nYOU LOSE.`);
    }
}

// Test the outcome of playRound
// console.log(playRound(playerSelection, computerSelection));

// Create function to play 5 rounds
// Player select is static - place outside of the loop.
// Player select is now dynamic, asks for a move.
// Insert computer function into the loop to generate new move each time.
// Insert playRound function to compare player and computer move to decide outcome.

function playGame() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter a move (Rock, Paper or Scissors): ");
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}

playGame();