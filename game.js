function computerPlay() {
    const choices = ['rock', 'paper', 'scissors']
    const randomSelectionIndex = Math.floor(Math.random() * choices.length)
    return choices[randomSelectionIndex]
}

console.log(computerPlay())

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection === computerSelection) {
        return "It's a tie! Friendship wins!"
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return 'You win! ' + playerSelection + ' beats ' + computerSelection
    } else {
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter your choice: Rock, Paper or Scissors')
        const computerSelection = computerPlay()
        const result = playRound(playerSelection, computerSelection)
        console.log('The result is: ' + result)

        if (result.includes('win')) {
            playerScore++
        } else if (result.includes('lose')) {
            computerScore++
        }
    }

    if (playerScore > computerScore) {
        console.log('Bravo! You win the game!!!')
    } else if (playerScore < computerScore) {
        console.log("You lose!!! Don't panic, you can play again!")
    } else {
        console.log("It's a tie! Friendship wins!")
    }
}

game()

