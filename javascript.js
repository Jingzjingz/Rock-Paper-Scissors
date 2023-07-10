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

let score = 0
let comScore = 0

function playRound(playerSelection, computerSelection){
    if ((playerSelection.toUpperCase()) === (computerSelection.toUpperCase())){
        return "It's a draw!";
    } else if ((playerSelection.toUpperCase() === "ROCK") && (computerSelection.toUpperCase() === "SCISSORS")){
        score += 1;
        return "You Win! Rock beats Scissors";
    } else if ((playerSelection.toUpperCase() === "ROCK") && (computerSelection.toUpperCase() === "PAPER")){
        comScore += 1;
        return "You Lose! Paper beats Rock";
    } else if ((playerSelection.toUpperCase() === "PAPER") && (computerSelection.toUpperCase() === "ROCK")){
        score += 1;
        return "You Win! Paper beats Rock";
    } else if ((playerSelection.toUpperCase() === "PAPER") && (computerSelection.toUpperCase() === "SCISSORS")){
        comScore += 1;
        return "You Lose! Scissors beats Paper";
    } else if ((playerSelection.toUpperCase() === "SCISSORS") && (computerSelection.toUpperCase() === "ROCK")){
        comScore += 1;
        return "You Lose! Rock beats Scissors";
    } else if ((playerSelection.toUpperCase() === "SCISSORS") && (computerSelection.toUpperCase() === "Paper")){
        score += 1;
        return "You Win! Scissors beats Paper"
    }  

}

// const playerSelection = prompt("Rock,Paper,Scissors!"," ");
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();

//while (comScore<3 && score<3){
for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock,Paper,Scissors!"," ");
    const computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));
    console.log(score, comScore)
    
}
if (score > comScore){
    console.log("You Win the Match!")
}else if (score < comScore){
    console.log("You Lose the Match!")
}else{
    console.log("It's a Draw Game!")
}
//} 




