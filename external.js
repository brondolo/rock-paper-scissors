
function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let randNum = Math.floor(Math.random() * 3);
    console.log(options[randNum] + " " + randNum);
    return options[randNum];
}

function playRound(playerSelection, computerSelection) {
    let options = ['rock', 'paper', 'scissors'];
    if(playerSelection === computerSelection) {
        console.log(`Player:${playerSelection} Computer:${computerSelection} It's a Tie!`);
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection ==='paper')
        ){
        console.log(`Player:${playerSelection} Computer:${computerSelection} Player Wins!`);

    }
    else if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection ==='paper')
        ){
        console.log(`Player:${playerSelection} Computer:${computerSelection} Computer Wins!`);
    }
}

