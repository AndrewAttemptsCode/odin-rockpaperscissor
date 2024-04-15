let playerScore = 5;
let computerScore = 5;

const buttonMelee = document.querySelector("#melee");
const buttonMage = document.querySelector("#mage");
const buttonRange = document.querySelector("#range");
const results = document.querySelector(".battleText");
const playerHealth = document.querySelector(".playerHealth");
const rivalHealth = document.querySelector(".rivalHealth");
const playerMove = document.querySelector(".playerMove");
const rivalMove = document.querySelector(".rivalMove");
const buttonRestart = document.querySelector(".restartButton");

buttonMelee.addEventListener("click", () => playRound("melee"));
buttonMage.addEventListener("click", () => playRound("mage"));
buttonRange.addEventListener("click", () => playRound("range"));
buttonRestart.addEventListener("click", () => restartGame());

function restartGame() {
    playerScore = 5;
    computerScore = 5;
    playerMove.src = `./images/questionmark.png`;
    rivalMove.src = `./images/questionmark.png`;
    results.textContent = "Let the battle commence!";
    playerHealth.textContent = "Health: 5/5";
    rivalHealth.textContent = "Health: 5/5";
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    const moveSelect = ["melee", "mage", "range"];

    return moveSelect[randomNumber];
}


function playRound(playerSelection) {
    if (playerScore === 0 || computerScore === 0) {
        endGame();
        return;
    }

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
    playerHealth.textContent = `Health: ${playerScore}/5`;
    rivalHealth.textContent = `Health: ${computerScore}/5`;
    playerMove.src = `./images/${playerSelection}.png`;
    rivalMove.src = `./images/${computerSelection}.png`;

}

function endGame() {
    results.textContent = computerScore === 0 ? "You win the fight!" : "You lost the fight!";
}