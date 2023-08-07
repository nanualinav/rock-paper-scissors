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
        alert(`You won this round the ${playerSelection} beats ${computerSelection} click ok to continue`)
        return `You won! ${playerSelection} beats ${computerSelection}`
    } else {
        alert(`You lost this round the ${computerSelection} beats ${playerSelection} click ok to continue`)
        return `You lost! ${computerSelection} beats ${playerSelection}`
    }
}

function welcomeUser() {
    alert(
        '👾Greetings, Intergalactic Gamer!👾 \n\nIn a distant universe, where aliens have impeccable fashion sense and asteroids wear stylish hats, a legendary showdown is about to begin! \nBrace yourself for the cosmic clash of "Rock, Scissors, Paper!" 🚀  \n\nYou have five rounds and the valid choices are: \nRock(R) \nPaper(P) \nScissors(S) \nTo start the game click the Close button and good luck! \n\nP.S. Choose your weapon wisely!'
    )
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
    } else {
        alert('Umm..I understand, you are scared :( See you around then!')
    }
}

function generateRandomNumber(min, max) {

    return min + Math.floor(Math.random() * (max - min))
}

function game() {
    let playerScore = 0
    let computerScore = 0
    const numberOfRounds = 5;

    welcomeUser()

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
            if (result.includes('won')) {
                playerScore++
            } else if (result.includes('lost')) {
                computerScore++
            }
        }
        revealWinner(playerScore, computerScore)
    }
}

function revealWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        alert('Bravo! You won the game!!!')
        return window.location.reload()
    } else if (playerScore < computerScore) {
        alert("You lost!!! Don't panic, you can play again!")
        return window.location.reload()
    } else {
        alert("It's a tie! Friendship wins!")
        return window.location.reload()
    }
}

game()