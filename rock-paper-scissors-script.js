//Randomly assign rock, paper, or scissors as the computer's choice 
function getComputerChoice() {
    let randomValue = Math.random();
    if (randomValue < .33) {
        return 'Rock';
    } else if (randomValue < .66) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

console.log(getComputerChoice());