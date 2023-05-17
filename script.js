'use strict';

let secretNumber = (Math.trunc(Math.random()*20) + 1);
let score = 20;
let highscore = 0;

// função utilizada para mostrar no console o numeor digitado pelo usuario
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = 'No Number';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        document.querySelector('number')
    }else if (guess > secretNumber) {
        if (score > 0){
            document.querySelector('.message').textContent = 'too high';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Loose the game!'
            document.querySelector('.score').textContent = 0;
        }
    }else if(guess < secretNumber) {
        if (score > 0){
            document.querySelector('.message').textContent = 'too low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Loose the game!'
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = (Math.trunc(Math.random()*20) + 1);

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.guess').value = '';

})