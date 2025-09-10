const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn'); 
const scissorsBtn = document.getElementById ('scissors-btn');
const playerScoreText = document.getElementById('player-score'); 
const computerScoreText = document.getElementById('computer-score'); 
const roundResultText = document.querySelector('.round-result'); 
const optionsContainer = document.querySelector('.options-container'); 
const restartBtn = document.getElementById('restart-btn'); 
const gameResultText = document.querySelector('.game-result'); 
const chooseOptionText = document.getElementById('choose-option');

let computerScore = 0; 
let playerScore = 0; 


function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors']; 
    let index = Math.floor(Math.random() * options.length); 
    return options[index]; 
}

function getRoundResult(playerChoice) {
    // console.log('getround result function called with ', playerChoice); 
    let computerChoice = getComputerChoice();
    const winMap = {
        'rock' : 'scissors', // rock beats scissors 
        'paper' : 'rock', // paper beats rock
        'scissors' : 'paper' // scissors beats paper 
    }
    roundResultText.style.display = 'block'; 

    if(computerChoice === playerChoice) {
        roundResultText.innerText = `It's a tie. Both choose: ${playerChoice}`; 
    }
    else if (computerChoice === winMap[playerChoice]) {
        playerScore += 1; 
        roundResultText.innerText = `Player Won! Player's ${playerChoice} beats Computer's ${computerChoice}`; 
    }
    else {
        computerScore += 1; 
        roundResultText.innerText = `Computer Won! Computer's ${computerChoice} beats Player's ${playerChoice}`; 
    }
    
    playerScoreText.innerText = playerScore;
    computerScoreText.innerText = computerScore; 

    if(computerScore === 3 || playerScore === 3) {
        let winner; 

        winner = playerScore === 3 ? 'Player' : 'Computer';  
        announceWinner(winner); 
    }
}


function announceWinner(winner) {
    gameResultText.innerText = `${winner} wins the game!`; 
    
    optionsContainer.style.display = 'none';
    chooseOptionText.innerText = " ";  
    restartBtn.style.display = 'block'; 
}


function restart() {
    playerScore = 0; 
    computerScore = 0; 

    playerScoreText.innerText = playerScore; 
    computerScoreText.innerText = computerScore; 

    roundResultText.innerText = ""; 
    gameResultText.innerText = "";  

    optionsContainer.style.display = 'block'; 
    chooseOptionText.innerText = "Choose Option: "; 
    restartBtn.style.display = 'none'; 
}

function play(userOption) {
    getRoundResult(userOption); 
}

let userOption; 

rockBtn.onclick = setRock;  
paperBtn.onclick = setPaper; 
scissorsBtn.onclick = setScissors;

restartBtn.onclick = restart; 


function setRock() {
    userOption = 'rock'; 
    getRoundResult(userOption); 
}

function setPaper() {
    userOption = 'paper'; 
    getRoundResult(userOption); 
}

function setScissors() {
    userOption = 'scissors'; 
    getRoundResult(userOption); 
}


