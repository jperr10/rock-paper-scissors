//Randomly assign rock, paper, or scissors as the computer's choice 
let computerChoice;
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

let playerChoice;

//Ask user for input
function getPlayerSelection() {
   playerChoice = prompt("Rock, Paper, Scissors?").toLowerCase();
   //If rock, paper, or scissors not entered keep asking
   while (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') {
        playerChoice = prompt("Rock, Paper, Scissors?").toLowerCase();
   }
   return playerChoice
}

let playerSelection;
let computerSelection;
let result;
//Play a single round of Rock-Paper-Scissors
function playRound(playerSelection, computerSelection) {
    //Get playerSelection
    playerSelection = getPlayerSelection();
    console.log(playerSelection);
    //Get computerSelection 
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    //Compare selections to determine winner or tie then return game result declaration
    if (playerSelection === computerSelection) {
        return result = "tie";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        return result = "win";
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        return result = "lose";
    } else {
        console.log('Error');
        return result = 'error';
    }
}

//Play a n-round game of Rock-Paper-Scissors
function game() {
    //Establish player and computer score
    let playerScore = 0;
    let computerScore = 0;
    //Play n rounds and display results of each round
    for (let i =0; i < 5; i++) {
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
        console.log(`After ${i} rounds, you have ${playerScore} and the computer has ${computerScore}`);
    }
    //Display results of the game
    if (playerScore > computerScore) {
        console.log('You have defeated the computer :)');
    } else if (playerScore < computerScore) {
        console.log('The computer defeated you :(');
    } else {
        console.log('You and the computer tied :/');
    }
}

console.log(game());
