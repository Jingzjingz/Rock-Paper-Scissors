function getComputerChoice(){
    let x = Math.floor((Math.random() * 3) + 1);
    if (x === 1){
        return "Rock";
    } else if (x === 2){
        return "Paper";
    } else {
        return "Scissors";
    } 
}

//console.log(getComputerChoice());

function playRound(playerSelection, computerSelection){
    if ((playerSelection.toUpperCase()) === (computerSelection.toUpperCase())){
        return "It's a draw!";
    } else if ((playerSelection.toUpperCase() === "ROCK") && (computerSelection.toUpperCase() === "SCISSORS")){
        return "You Win! Rock beats Scissors";
    } else if ((playerSelection.toUpperCase() === "ROCK") && (computerSelection.toUpperCase() === "PAPER")){
        return "You Lose! Paper beats Rock";
    } else if ((playerSelection.toUpperCase() === "PAPER") && (computerSelection.toUpperCase() === "ROCK")){
        return "You Win! Paper beats Rock";
    } else if ((playerSelection.toUpperCase() === "PAPER") && (computerSelection.toUpperCase() === "SCISSORS")){
        return "You Lose! Scissors beats Paper";
    } else if ((playerSelection.toUpperCase() === "SCISSORS") && (computerSelection.toUpperCase() === "ROCK")){
        return "You Lose! Rock beats Scissors";
    } else if ((playerSelection.toUpperCase() === "SCISSORS") && (computerSelection.toUpperCase() === "Paper")){
        return "You Win! Scissors beats Paper"
    }
}

const playerSelection = prompt("Rock,Paper,Scissors!"," ");
//const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

function game(){
    
}

