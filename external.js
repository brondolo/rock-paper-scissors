
function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let randNum = Math.floor(Math.random() * 3);
    console.log(options[randNum] + " " + randNum);
    return options[randNum];
}

