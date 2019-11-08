let playerPoints = 0;
let computerPoints = 0;

function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let compSelection = options[Math.floor(Math.random() * options.length)];
    return compSelection.toUpperCase();
}

function checkGame(){
    if (playerPoints === 5 || computerPoints === 5) {
        if(playerPoints > computerPoints){
            finals.textContent = "You win, " + playerPoints + " to " + computerPoints;
        }else {
            finals.textContent = "Computer wins, " + computerPoints + " to " + playerPoints;
        }
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
        newGameBtn.style.visibility = "visible";
    }
}

function playRound (playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        let result = "Draw play again.";
        return result;
    }else if(playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        let result = "You win! Rock beats Scissors";
        playerPoints++;
        return result
    }else if(playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        let result = "You lose! Rock beats Scissors";
        computerPoints++;
        return result;
    }else if(playerSelection === "ROCK" && computerSelection === "PAPER") {
        let result = "You lose! Paper beats Rock";
        computerPoints++;
        return result;
    }else if(playerSelection === "PAPER" && computerSelection === "ROCK") {
        let result = "You win! Paper beats Rock";
        playerPoints++;
        return result;
    }else if(playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        let result = "You win! Scissors beats Paper";
        playerPoints++;
        return result;
    }else if(playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        let result = "You lose! Scissors beats Paper";
        computerPoints++;
        return result;
    }
}

const roundP = document.querySelector("#roundRes");
const Scr = document.querySelector("#Score");
let finals = document.querySelector("#announcement");
const newGameBtn = document.querySelector("#newGame");


const btnRock = document.querySelector(".rock");
btnRock.addEventListener('click', function(e) {
    const computerSelection = computerPlay();
    const playerSelection = "ROCK";
    
    let roundResult = playRound(playerSelection, computerSelection);
    
    roundP.textContent = roundResult;
    Scr.textContent = "Current Score - Player: " + playerPoints + ", Computer: " + computerPoints;
    checkGame();
    
});
const btnPaper = document.querySelector(".paper");
btnPaper.addEventListener('click', function(e) {
    const computerSelection = computerPlay();
    const playerSelection = "PAPER";
    
    let roundResult = playRound(playerSelection, computerSelection);
    
    roundP.textContent = roundResult;
    Scr.textContent = "Current Score - Player: " + playerPoints + ", Computer: " + computerPoints;
    checkGame();
});

const btnScissors = document.querySelector(".scissors");
btnScissors.addEventListener('click', function(e) {
    const computerSelection = computerPlay();
    const playerSelection = "SCISSORS";
    
    let roundResult = playRound(playerSelection, computerSelection);
    
    roundP.textContent = roundResult;
    Scr.textContent = "Current Score - Player: " + playerPoints + ", Computer: " + computerPoints;
    checkGame();
});

newGameBtn.addEventListener('click', function(e){
    newGame();
});


function newGame(){
    playerPoints = 0;
    computerPoints = 0;

    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;
    newGameBtn.style.visibility = "hidden";


    roundP.textContent = "";
    Scr.textContent = "";
    finals.textContent = "";
}