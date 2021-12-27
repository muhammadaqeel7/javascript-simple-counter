'use strict';

const number = document.querySelector('.counter-number');
const decreaseCounter = document.querySelector('.decrease-counter');
const resetCounter = document.querySelector('.reset-counter');
const increaseCounter = document.querySelector('.increase-counter');

let counter = 0;
number.textContent = counter;

// Increase counter
increaseCounter.addEventListener('click', () => {
  counter++;
  number.textContent = counter;
  if (counter >= 1) {
    number.style.color = '#2abf77';
  } else if (counter === 0) {
    number.style.color = '#425a65';
  }
});

// Decrease counter
decreaseCounter.addEventListener('click', () => {
  counter--;
  number.textContent = counter;
  if (counter < 0) {
    number.style.color = '#ff1744';
  } else if (counter === 0) {
    number.style.color = '#425a65';
  }
});

// Reset counter
resetCounter.addEventListener('click', () => {
  counter = 0;
  number.textContent = counter;
  if (counter === 0) number.style.color = '#425a65';
});
