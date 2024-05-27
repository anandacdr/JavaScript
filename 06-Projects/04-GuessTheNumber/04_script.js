let randomNumber = (parseInt(Math.random() * 100 + 1))

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.resultPara')


const p = document.createElement('p')


let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if (isNaN(guess)){
        alert("Please, Enter a valid Integer Number :)")
    } else if (guess < 1){
        alert("Please, Enter a number greater than or equal to 1")
    } else if (guess > 100){
        alert("Please, Enter a number less than 100")
    } else {
        prevGuess.push(guess)

        if (Number === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number Was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)

        }
    }
}

function checkGuess(guess){
    if (guess === randomNumber){
        displayMessage(`You have guessed righit`)
        endGame()

    } else if (guess < randomNumber){
        displayMessage(`Number is TO Low.`)

    } else if (guess > randomNumber){
        displayMessage(`Number is TO High.`)
    }
}

function displayGuess (guess){
    userInput.value = ''

    guessSlot.innerHTML += `${guess}, `

    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;

}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function newGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')

    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame();

}

function endGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = (parseInt(Math.random() * 100 + 1));
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true

    });

}