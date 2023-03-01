//Randomly assign rock, paper, or scissors as the computer's choice 
function getComputerChoice() {
    let randomValue = Math.random();
    if (randomValue < .33) {
        return 'rock';
    } else if (randomValue < .66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

//Play a single round of Rock-Paper-Scissors
function playRound(playerSelection, computerSelection) {
    //Get playerSelection
    let getPlayerSelection = prompt('What is your choice?', playerSelection).toLowerCase();
    console.log(getPlayerSelection);
    //Get computerSelection (use getComputerChoice())
    let getComputerSelection = getComputerChoice();
    console.log(getComputerSelection);
    //Compare selections to determine winner or tie then return game result declaration
    if (getPlayerSelection === getComputerSelection) {
        return "It's a tie!";
    } else if ((getPlayerSelection === 'rock' && getComputerSelection === 'scissors') || (getPlayerSelection === 'paper' && getComputerSelection === 'rock') || (getPlayerSelection === 'scissors' && getComputerSelection === 'paper')) {
        return `You win! ${getPlayerSelection} beats ${getComputerSelection}!`;
    } else {
        return `You lose! ${getComputerSelection} beats ${getPlayerSelection}`
    }
}
const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));