let playerScore = 0;
let computerScore = 0;
const rock = 1;
const paper = 2;
const scissor = 3;
let playerScoreUpdate = document.getElementById('playerScore');
let computerScoreUpdate = document.getElementById('computerScore');
let firstStep = document.getElementById('enterName')
let choise = document.getElementById('playerChoice')
let youWon = document.getElementById('youWon')
let compWon = document.getElementById('compWon')
let tryAgain = document.getElementById('tryAgain')
let tryAgainComp = document.getElementById('tryAgainComp')
let noThanks = document.getElementById('noThanks')
let noThanksComp = document.getElementById('noThanksComp')
let displayResult = document.getElementById('displayResult')

function lose(message) {
    choise.style.visibility = 'hidden'
    displayResult.style.visibility = 'visible'
    
    displayResult.innerHTML = message

    if (computerScore < 1) {
        setTimeout(() => {
            console.log("Delayed for 1 second.");
            displayResult.style.visibility = 'hidden'
            choise.style.visibility = 'visible'
        }, "3000")
    }

    console.log("lose")
    computerScore++;
    computerScoreUpdate.innerHTML = computerScore
    if (computerScore === 2) {

        setTimeout(() => {
            console.log("Delayed for 1 second.");
            displayResult.style.visibility = 'hidden'
            compWon.style.visibility = 'visible'
            playerScore = 0;
            computerScore = 0;
            playerScoreUpdate.innerHTML = playerScore;
            computerScoreUpdate.innerHTML = computerScore
            
        }, "3000")
        tryAgainComp.addEventListener('click', function () {
            compWon.style.visibility = 'hidden'
            choise.style.visibility = 'visible'
        })
        noThanksComp.addEventListener('click', function () {
            window.location.reload();
        })
    }
}
function win(message) {
    choise.style.visibility = 'hidden'
    displayResult.style.visibility = 'visible'

    displayResult.innerText = message

    if (playerScore < 1) {
        setTimeout(() => {
            console.log("Delayed for 1 second.");
            displayResult.style.visibility = 'hidden'
            choise.style.visibility = 'visible'
        }, "3000")
    }

    console.log("Win")
    playerScore++;
    playerScoreUpdate.innerHTML = playerScore;
    if (playerScore === 2) {

        setTimeout(() => {
            console.log("Delayed for 1 second.");
            displayResult.style.visibility = 'hidden'
            youWon.style.visibility = 'visible'
            playerScore = 0;
            computerScore = 0;
            playerScoreUpdate.innerHTML = playerScore;
            computerScoreUpdate.innerHTML = computerScore
            
        }, "3000")
        tryAgain.addEventListener('click', function() {
            youWon.style.visibility = 'hidden'
            choise.style.visibility = 'visible'
        })
        noThanks.addEventListener('click', function () {
            window.location.reload();
        })
    }
}
function draw(message) {
    choise.style.visibility = 'hidden'
    displayResult.style.visibility = 'visible'

    displayResult.innerText = message


    setTimeout(() => {
        console.log("Delayed for 1 second.");
        displayResult.style.visibility = 'hidden'
        choise.style.visibility = 'visible'
    }, "3000")

    console.log("Draw")
}

function computerChoice() {
    let compPick = Math.floor(Math.random() * 3 + 1)
    return compPick;
}

function start() {
    let playerName = document.getElementById('playerName')
    document.querySelector('#projekt').addEventListener('submit', function (event) {
        event.preventDefault();
        if (event.target.elements.Playername.value == '') {
            playerName.innerHTML = Player
        }
        else {
            playerName.innerHTML = event.target.elements.Playername.value
        }

        stageOne()
    })
}


function stageOne() {

    let playerPickRock = document.getElementById('playerPickRock')
    let playerPickPaper = document.getElementById('playerPickPaper')
    let playerPickScissor = document.getElementById('playerPickScissor')
    firstStep.style.visibility = 'hidden'
    choise.style.visibility = 'visible'
    youWon.style.visibility = 'hidden'
    compWon.style.visibility = 'hidden'


    playerPickRock.addEventListener('click', function () {
        secondStep(rock, computerChoice());
    })
    playerPickPaper.addEventListener('click', function () {
        secondStep(paper, computerChoice());
    })
    playerPickScissor.addEventListener('click', function () {
        secondStep(scissor, computerChoice())
    })
}



function secondStep(choice, compPick) {


    switch (choice) {

        case 1:
            if (compPick === 1) {
                draw("Computer also picked rock. It's a draw")
            }
            if (compPick === 2) {
                lose('Computer picked paper. You lose')
            }
            if (compPick === 3) {
                win('Computer picked scissor. You win')
            }
            break;

        case 2:
            if (compPick === 1) {
                win('Computer picked rock. You win')
            }
            if (compPick === 2) {
                draw("Computer also picked paper. It's a draw")
            }
            if (compPick === 3) {
                lose('Computer picked scissor. You lose')
            }
            break;
        case 3:
            if (compPick === 1) {
                lose('Computer picked rock. You lose')
            }
            if (compPick === 2) {
                win('Computer picked paper. You win')
            }
            if (compPick === 3) {
                draw("Computer also picked scissor. It's a draw")
            }
            break;
    }
}


start()


