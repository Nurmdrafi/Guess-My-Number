'use strict';
/*================
Guess My Number
================*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Click Function //
document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    // User value input always string, So have to convert to Number

    // When there is no input
    if (!guess) { // !guess = 'blank' and '0'
        document.querySelector('.message').textContent = '🚫 No Number!'

        // When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '✨ Congratulations!';
        document.querySelector('.number').textContent = secretNumber;

        // Style
        document.querySelector('body').style.backgroundColor = 'green';

        // Save Highscore
        if (score > highscore) { // highscore = 0 (always)
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    // When guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1) { // Between 1 and 20
            document.querySelector('.message').textContent = guess > secretNumber ? '😒 Too High!' : '👀 Too Low!';
            score--; // Each click on check button score decreased by 1
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💣 You lost the Game';
        }
    }
})
// Reset/Again Button
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = '0';
    document.querySelector('body').style.backgroundColor = '#222'

});

// Enter Function //
document.addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {

        let guess = Number(document.querySelector('.guess').value);
        let message = document.querySelector('.message');
        let number = document.querySelector('.number');
        // When there is no input
        if (!guess) { // !guess = 'blank' and '0'
            message.textContent = '🚫 No Number!'

            // When player wins
        } else if (guess === secretNumber) {
            message.textContent = '✨ Congratulations!';
            number.textContent = secretNumber;

            // Style
            document.querySelector('body').style.backgroundColor = 'green';

            // Save Highscore
            if (score > highscore) { // highscore = 0 (always)
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }
        // When guess is wrong
        else if (guess !== secretNumber) {
            if (score > 1) { // Between 1 and 20
                message.textContent = guess > secretNumber ? '😒 Too High!' : '👀 Too Low!';
                score--; // Each click on check button score decreased by 1
                document.querySelector('.score').textContent = score;
            } else {
                message.textContent = '💣 You lost the Game';
            }
        }
    }
});

//========//
//==Note==//
//========//


// There has 3 result or scenario
/*
1. !guess = true => When there is no input
2. guess === secretNumber => When player wins
3. guess !== secretNumber => When guess is wrong
*/

// Create Secret number
/*
1. Get random Number each time => Math.random();
2. Get random Number each time within 1-19.999 => Math.random()*20;
3. But the problem is each time we got number with decimels, SO...
4. Get random integer number => Math.trunc(Math.random()*20); => 19.9999 = 19
5. Finally Math.trunc(Math.random()*20)+1 // Add +1 for equality
*/
