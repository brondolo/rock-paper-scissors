
function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let randNum = Math.floor(Math.random() * 3);
    console.log(options[randNum] + " " + randNum);
    return options[randNum];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {

        console.log(`Player:${playerSelection} Computer:${computerSelection} It's a Tie!`);
        return 0;

    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection ==='paper')
        ){

        console.log(`Player:${playerSelection} Computer:${computerSelection} Player Wins!`);
        return 1;
        
    }
    else if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection ==='paper')
        ){

        console.log(`Player:${playerSelection} Computer:${computerSelection} Computer Wins!`);
        return -1;
    }
}

function game() {
    let playerSelection;
    let computerSelection;
    let playerScore = 0;

    for(let i = 0; i < 5; i++) {
        playerSelection = prompt('Rock, Paper, or Scissors?');
        playerSelection = playerSelection.toLowerCase();
        computerSelection = getComputerChoice().toLowerCase();    
        playerScore += playRound(playerSelection, computerSelection);
    }

    if(playerScore === 0) {
        console.log("It's a Tie!");
    }
    else if (playerScore > 0) {
        console.log("You win!");
    }
    else {
        console.log("You lost.. boooooo");
    }
}