function computerPlay() {
    const choices = ['rock', 'paper', 'scissors']
    const randomSelectionIndex = Math.floor(Math.random() * choices.length)
    return choices[randomSelectionIndex]
}
function playRound(playerSelection, computerSelection) {
    const playerWinConditions = ['rock:scissors', 'paper:rock', 'scissors:paper'];
    const playedCombination = playerSelection + ':' + computerSelection;
    const playerWon = playerWinConditions.includes(playedCombination);
    const isTie = playerSelection === computerSelection;
    if (isTie) {
        alert("we have a tie! in this round click ok to continue")
        return "It's a tie! Friendship rulez!"
    } else if (playerWon) {
        alert(`you won this round the ${playerSelection} beats ${computerSelection} click ok to continue`)
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else {
        alert(`you lost this round the ${computerSelection} beats ${playerSelection} click ok to continue`)
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}
function generateRandomNumber(min, max) {

    return min + Math.floor(Math.random() * (max - min))
}
function game() {
    let playerScore = 0
    let computerScore = 0

    let isPlayerReady = confirm('Are you ready for this game?? Click OK if you are ready!')

    if (isPlayerReady) {
        let messages = [
            'Are you sure you are ready for this game???',
            'This is going to be very extreme!!',
            'Seriously this is not a funny game!!',
            'I would give up if I were you!!'
        ]

        messages.sort(() => Math.random() - Math.random())

        let numberOfMessages = generateRandomNumber(0, messages.length)

        for (let i = 0; i < numberOfMessages; i++) {
            alert(messages[i]);
        }




        alert(
            '👾Greetings, Intergalactic Gamer!👾 \n\nIn a distant universe, where aliens have impeccable fashion sense and asteroids wear stylish hats, a legendary showdown is about to begin! \nBrace yourself for the cosmic clash of "Rock, Scissors, Paper!" 🚀  \n\nYou have five rounds and the valid choices are: \nRock(R) \nPaper(P) \nScissors(S) \nTo start the game click the Close button and good luck! \n\nP.S. Choose your weapon wisely!'
            )
        const numberOfRounds = 5;
        for (let i = 0; i < numberOfRounds; i++) {
            const playerRawSelection = prompt('Enter your choice: Rock (R), Paper (P) or Scissors (S)')
            const allowedShortInputs = ['r', 'p', 's'];
            const allowedInputs = ['rock', 'paper', 'scissors'];
            let playerSelection = playerRawSelection;
            if (allowedShortInputs.includes(playerRawSelection)) {
                playerSelection = allowedInputs[allowedShortInputs.indexOf(playerRawSelection)]
            }
            const computerSelection = computerPlay()

            const isValidInput = allowedInputs.some(input => input === playerSelection.toLowerCase());

            if (playerSelection === null) {
                alert('See you around thank you')
                return window.location.reload()
            } else if (!isValidInput) {
                alert(`please type a valid choice, Round ${i + 1} reset`)
                i--
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
    } else {
        alert('Thank you, see you around!')
    }
}
//SetTimeout to allow page to load fully.
document.addEventListener('DOMContentLoaded', () => setTimeout(game));