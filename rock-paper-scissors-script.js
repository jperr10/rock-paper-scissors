let computerChoice;
let computerSelection;
let result;
function getComputerChoice() {
    let randomValue = Math.random();
    if (randomValue < .33) {
        return computerChoice = 'rock';
    } else if (randomValue < .66) {
        return computerChoice = 'paper';
    } else {
        return computerChoice = 'scissors';
    }
}

let pScore = 0;
const playerScore = document.querySelector('.playerScore');
playerScore.textContent = `Player: ${pScore}`;
let cScore = 0;
const computerScore = document.querySelector('.computerScore');
computerScore.textContent = `Computer: ${cScore}`;

const buttons = document.querySelectorAll('button');

const container = document.querySelector('#container');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        console.log(playerSelection);
        const computerSelection = getComputerChoice();
        console.log(computerSelection);
        const roundResult = document.querySelector('.roundResult');
        const gameScore = document.querySelector('.gameScore');
        if (playerSelection === computerSelection) {
            roundResult.textContent = "This round is a tie";
        } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
            roundResult.textContent = `You won this round! ${playerSelection} beats ${computerSelection}`;
            playerScore.textContent =`Player: ${++pScore}`;
        } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
            roundResult.textContent = `You lost this round. ${computerSelection} beats ${playerSelection}`;
            computerScore.textContent = `Computer: ${++cScore}`;
        } else {
            roundResult.textContent = "An error occurred";
        }
        if (pScore === 5 || cScore === 5) {
            const gameOver = document.createElement('div');
            const gameOverText = document.createElement('div');
            const newGameButton = document.createElement('button');

            gameOver.appendChild(gameOverText);
            if (pScore > cScore) {
                gameOverText.textContent = `Congratulations! You beat the computer ${pScore} to ${cScore}.`;
            } else {
                gameOverText.textContent = `Bummer. You lost to the computer ${cScore} to ${pScore}.`;
            };

            gameOver.appendChild(newGameButton);
            newGameButton.textContent = "Play again";
            container.appendChild(gameOver);

            newGameButton.addEventListener('click', () => {
                pScore = 0;
                playerScore.textContent = `Player: ${pScore}`;
                cScore = 0;
                computerScore.textContent = `computer: ${cScore}`;
                roundResult.textContent = "";
                container.removeChild(gameOver);
            })
        }
    })  
})

