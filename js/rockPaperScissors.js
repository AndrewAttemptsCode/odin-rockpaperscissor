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
        computerChoice = "Rock";
        console.log("Rock");
    } else if (randomNumber === 2) {
        computerChoice = "Paper";
        console.log("Paper");
    } else if (randomNumber === 3) {
        computerChoice = "Scissors";
        console.log("Scissors");
    }
    return computerChoice;
}

getComputerChoice();