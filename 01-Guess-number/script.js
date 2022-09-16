'use strict';

/*
console.log(document.querySelector('.message').textContent);


document.querySelector('.number').textContent = 20;
document.querySelector('.score').textContent = 13;


document.querySelector('.guess').value = 23;
const guess = document.querySelector('.guess').value;

console.log(guess);

*/

function randomNumber () {
    return Math.trunc(Math.random() * 20) + 1;
}

function displayMessage (message) {
    document.querySelector('.message').textContent = message;
}

let secretNumber = randomNumber();
let score = 20;
let highScore = Number(document.querySelector('.highscore').textContent);

document.querySelector('.check').addEventListener('click', function() {

    const guess = Number(document.querySelector('.guess').value);

    if ( score === 0 ) {
        displayMessage('👎 GAME OVER!');
        return;
    }

    if (!guess) {
        displayMessage('⛔ No number!');

    } else if ( guess === secretNumber ) {
        displayMessage('💃 Correct number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('body').style.backgroundColor = '30rem';

        if ( score > highScore ) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;

        }
    } else if ( guess !== secretNumber ) {
        score--;
        document.querySelector('.score').textContent =  score;
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');

    }

});

document.querySelector('.again').addEventListener('click', function () {

    score = 20;
    secretNumber = randomNumber();
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent =  score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('body').style.backgroundColor = '15rem';
    document.querySelector('.number').textContent = '?';

})