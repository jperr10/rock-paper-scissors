//Randomly assign rock, paper, or scissors as the computer's choice 
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


// Add event listener to buttons to play the game
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    let playerScore = 0;
    let computerScore = 0;
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
            roundResult.textContent = "You won this round!";
            playerScore = ++playerScore;
        } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
            roundResult.textContent = "You lost this round :/";
            computerScore = ++computerScore;
        } else {
            roundResult.textContent = "An error occurred";
        }
    })  
})

//Play a n-round game of Rock-Paper-Scissors
function game() {
    //Establish player and computer score
    let playerScore = 0;
    let computerScore = 0;
    let roundNumber = 0;
    //Play n rounds and display results of each round
    // for (let i =0; i < 5; i++) {
        playRound();
        if (result === "tie") {
            console.log('successful tie');
        } else if (result === "win") {
            playerScore = ++playerScore;
            console.log(`You win! ${playerChoice} beats ${computerChoice}!`);
        } else if (result === "lose") { 
            computerScore = ++computerScore;
            console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
        } else {
            console.log('error');
        }
        roundNumber = ++roundNumber;
        console.log(`After ${roundNumber} rounds, you have ${playerScore} and the computer has ${computerScore}`);
    //}

    //Display results of the game
    if (playerScore > computerScore) {
        console.log('You have defeated the computer :)');
    } else if (playerScore < computerScore) {
        console.log('The computer defeated you :(');
    } else {
        console.log('You and the computer tied :/');
    }
}

//console.log(game());
