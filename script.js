
const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const restartButton = document.getElementById('restartButton');
const winnningMessageElement = document.getElementById('winningMessage');
const winnningMessageTextElement = document.querySelector('[data-winning-message-text]');

let circleTurn;

startGame();

restartButton.addEventListener('click', startGame);

function startGame() {
    circleTurn = false;
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS);
        cell.classList.remove(CIRCLE_CLASS);
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, {once: true})
    });
    setBoardHoverClass();
    winnningMessageElement.classList.remove('show');
}



function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS: X_CLASS;
    //Place mark
    placeMark(cell, currentClass);
    //Check For Win
    if(checkWin(currentClass)) {
        endGame(false);
    }
    //Check For Draw
    else if(isDraw()) {
        console.log("DRAW");
        endGame(true);
    }
    //Switch Turns
    else {
        swapTurns();
        setBoardHoverClass();
    }
}

function endGame(draw) {
    if(draw) {
        winnningMessageTextElement.innerText = 'Draw!';
    }
    else {
        winnningMessageTextElement.innerText = `${circleTurn ? "0's" : "X's"} Wins!`;
    }
    winnningMessageElement.classList.add('show');
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || 
               cell.classList.contains(CIRCLE_CLASS);
    });
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    circleTurn = !circleTurn;
}

function setBoardHoverClass() {
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);
    if(circleTurn) {
        board.classList.add(CIRCLE_CLASS);
    }
    else {
        board.classList.add(X_CLASS);
    }
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        });
    });
}