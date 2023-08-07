let round = 0;
let playerScore = 0;
let computerScore = 0;
let isFirstGame = true;

function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    round++;

    if (playerSelection === computerSelection) {
        alert(`Round ${round}: It's a tie! Player: ${playerScore} Computer: ${computerScore}`);
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        alert(`Round ${round}: You win this round! Player: ${playerScore} Computer: ${computerScore}`);
    } else {
        computerScore++;
        alert(`Round ${round}: Computer wins this round! Player: ${playerScore} Computer: ${computerScore}`);
    }

    if (round < 5) {
        startGame();
    } else {
        if (playerScore > computerScore) {
            alert(`Game over! You win! Player: ${playerScore} Computer: ${computerScore}`);
        } else if (playerScore < computerScore) {
            alert(`Game over! Computer wins! Player: ${playerScore} Computer: ${computerScore}`);
        } else {
            alert(`Game over! It's a tie! Player: ${playerScore} Computer: ${computerScore}`);
        }
    }
}

function welcomeMessage(){
    alert(
        `👾Greetings, Intergalactic Gamer!👾 \n\nIn a distant universe, where aliens have impeccable fashion sense and asteroids wear stylish hats, a legendary showdown is about to begin! Brace yourself for the cosmic clash of "Rock, Scissors, Paper!" 🚀 \nTo start the game click the ok button and good luck! P.S. Choose your weapon wisely!`
    )
}

function startGame() {
    const playerSelection = prompt("Enter your choice: rock, paper, or scissors")?.toLowerCase()?.trim();
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        const computerSelection = computerChoice();
        playRound(playerSelection, computerSelection);
    } else {
        alert("Invalid input! Please choose rock, paper, or scissors.");
        startGame();
    }
}

// this condition only to show the welcome message only when the game starts
if(isFirstGame){
    welcomeMessage()
    isFirstGame = false
}

startGame();