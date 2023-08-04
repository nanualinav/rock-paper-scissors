function computerPlay() {
    const choices = ['rock', 'paper', 'scissors']
    const randomSelectionIndex = Math.floor(Math.random() * choices.length)
    return choices[randomSelectionIndex]
}


function playRound(playerSelection, computerSelection) {

    
        if (playerSelection === computerSelection) {
            alert("we have a tie! in this round click ok to continue")
            return "It's a tie! Friendship wins!"
        } else if (
            (playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {
            alert(`you won this round the ${playerSelection} beats ${computerSelection} click ok to continue`)
            return `You win! ${playerSelection} beats ${computerSelection}`
        } else {
            alert(`you lost this round the ${playerSelection} beats ${computerSelection} click ok to continue`)
            return `You lose! ${playerSelection} beats ${computerSelection}`       
        }
    
}

function game() {
    let playerScore = 0
    let computerScore = 0
    
    alert('Welcome to Famous Game Rock paper scissors: you have five rounds and the valid choices are [Rock, Paper, Scissors] to start the game click the ok button and good luck ;)')
   
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter your choice: Rock, Paper or Scissors')
        const computerSelection = computerPlay()
      
        if(playerSelection === null){
            alert('See you around thank you')
            return window.location.reload()

        } else if ((playerSelection.toLowerCase() !== 'rock') && (playerSelection.toLowerCase() !== 'scissors') && (playerSelection.toLowerCase() !== 'paper' )){
            if(i === 0) {
                alert("please type a valid choice, Round 01 reset")
                i--
            } else if (i === 1){
                alert("please type a valid choice, Round 02 reset")
                i--
            } else if (i === 2){
                alert("please type a valid choice, Round 03 reset")
                i--
             } else if (i === 3){
                alert("please type a valid choice, Round 04 reset")
                i--
            }else if (i === 4){
                alert("please type a valid choice, Round 05 reset")
                i--
            }

        } else {
        const result = playRound(playerSelection, computerSelection)

        if (result.includes('win')) {
            playerScore++
        } else if (result.includes('lose')) {
            computerScore++
        }

        }

        
    }

    if (playerScore > computerScore) {
        alert('Bravo! You win the game!!!')
        return window.location.reload()
    } else if (playerScore < computerScore) {
        alert("You lose!!! Don't panic, you can play again!")
        return window.location.reload()
    } else {
        alert("It's a tie! Friendship wins!")
        return window.location.reload()
    }
}

game()