let playerScore = 5;
let computerScore = 5;

const buttonMelee = document.querySelector("#melee");
const buttonMage = document.querySelector("#mage");
const buttonRange = document.querySelector("#range");
const results = document.querySelector(".battleText");
const scoreboard = document.querySelector("#scoreboard");

buttonMelee.addEventListener("click", () => playRound("melee"));
buttonMage.addEventListener("click", () => playRound("mage"));
buttonRange.addEventListener("click", () => playRound("range"));


function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    const moveSelect = ["melee", "mage", "range"];

    return moveSelect[randomNumber];
}


function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let resultMessage;

    // If both selections are the same, it's a draw.
    if (playerSelection === computerSelection) {
        resultMessage = `${playerSelection} TIES ${computerSelection}`;
    // Check all win conditions for the player.
    // Take 1 life from computer.
    } else if (
        (playerSelection === "melee" && computerSelection === "range") ||
        (playerSelection === "mage" && computerSelection === "melee") ||
        (playerSelection === "range" && computerSelection === "mage")
    ) {
        computerScore--;
        resultMessage = `${playerSelection} BEATS ${computerSelection}`;
    // If not a draw and not a player win, computer wins.
    // Take 1 life from player.
    } else {
        playerScore--;
        resultMessage = `${computerSelection} BEATS ${playerSelection}`;
    }

    results.textContent = resultMessage.toUpperCase();
    scoreboard.textContent = `Player: ${playerScore}/5 Computer: ${computerScore}/5`;

    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
}


function endGame() {
    results.textContent = playerScore === 5 ? "You win the game" : "You lose the game.";
}