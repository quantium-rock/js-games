'use strict';

// Selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const diceImg = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


// Global variables
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;


// Functions 
function resetGame () {
    scores[0] = 0;
    scores[1] = 0;
    currentScore = 0;
    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    diceImg.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    playing = true;

};

function playerScore () {
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
};

function switchPlayer () {
    if ( playing ) {
        currentScore = 0;
        playerScore();
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
    }
};

function rollDice () {
    if ( playing ) {
        // Roll random dice
        const diceNum = Math.trunc(Math.random() * 6) + 1;
        diceImg.classList.remove('hidden');
        diceImg.src = `dice-${diceNum}.png`;  
        
        // Add score to the player
        if ( diceNum !== 1) {
            currentScore += diceNum;
            playerScore();      
        } else {
            switchPlayer();
        }
    }
};

function winningPlayer () {
    if (scores[activePlayer] >= 100 ) {
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
};


function holdScore () {
    if ( playing ) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    }

    // Check if the player won
    winningPlayer();

    // Switch player
    switchPlayer();
}


// Button Actions 
btnNew.addEventListener('click', resetGame);
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);




