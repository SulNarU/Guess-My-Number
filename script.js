'use strict';

/*
document.querySelector('.message').textContent = 'Correct Number!:)';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
function secretNumberFunc() {
  return Math.trunc(Math.random() * 20) + 1;
}
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let secretNumber = secretNumberFunc();

let highscore = 0;
let score = 20;

document.querySelector('.again').addEventListener('click', function () {
  // body element
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  // reset
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  secretNumber = secretNumberFunc();

  document.querySelector('.score').textContent = score;
  console.log(secretNumber);
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    //document.querySelector('.message').textContent = 'NO NUMBER :(';
    displayMessage('NO NUMBER :(');
  } else if (guess === secretNumber) {
    //Win
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    } else {
      document.querySelector('.highscore').textContent = highscore;
    }

    //document.querySelector('.message').textContent = 'Correct Number!:)';
    displayMessage('Correct Number!:)');
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    // guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High' : 'Too Low';
      displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage('You lost the game:(');
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').textContent = secretNumber;
    }
    //   } else if (guess > secretNumber) {
    //     //guess too high
    //     if (score > 1) {
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //       document.querySelector('.message').textContent = 'Too High';
    //     } else {
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //       document.querySelector('.message').textContent = 'You lost the game:(';
    //       document.querySelector('body').style.backgroundColor = 'red';
    //       document.querySelector('.number').textContent = secretNumber;
    //     }
    //   } else if (guess < secretNumber) {
    //     //guess to low
    //     if (score > 1) {
    //       score--;
    //       document.querySelector('.message').textContent = 'Too Low';
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //       document.querySelector('.message').textContent = 'You lost the game:(';
    //       document.querySelector('body').style.backgroundColor = 'red';
    //       document.querySelector('.number').textContent = secretNumber;
    //     }
  }
});
