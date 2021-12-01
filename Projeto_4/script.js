// global varibles
const ballSection = document.querySelector('#ball-section');
const colorNumber = document.querySelector('#rgb-color');
const answer = document.querySelector('#answer');
const score = document.querySelector('#score');
const resetGame = document.querySelector('#reset-game');
let count = 0;

// reset score
function resetScore() {
  score.innerText = '0';
}
window.onload = resetScore;

// generate random color
function generateRandomColor() {
  const rgb1 = Math.floor(Math.random() * 255);
  const rgb2 = Math.floor(Math.random() * 255);
  const rgb3 = Math.floor(Math.random() * 255);
  return `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
}

// create balls
function createBalls() {
  for (let i = 0; i < 6; i += 1) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    ball.style.backgroundColor = generateRandomColor();
    ballSection.appendChild(ball);
  }
}
createBalls();

// generate color reference
function generateColorReference() {
  const balls = document.querySelectorAll('.ball');
  const randomNumber = Math.floor(Math.random() * (balls.length - 1));
  colorNumber.innerText = balls[randomNumber].style.backgroundColor;
}
generateColorReference();

// generate answer
function generateAnswer(event) {
  const selected = event.target;
  if (selected.style.backgroundColor === colorNumber.innerText) {
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

// get score count
function getScore() {
  if (answer.innerText === 'Acertou!') {
    count += 3;
  }
  score.innerText = count;
}

// generate start instruction
function startInstruction() {
  answer.innerText = 'Escolha uma cor';
}
startInstruction();

// reset balls
function resetBalls() {
  const balls = ballSection.childNodes;
  for (let i = balls.length - 1; i >= 0; i -= 1) {
    balls[i].style.backgroundColor = '';
    balls[i].style.backgroundColor = generateRandomColor();
  }
}

// reset color reference
function resetColorReference() {
  colorNumber.innerText = '';
  generateColorReference();
}

// reset start instruction
function resetStartInstruction() {
  startInstruction();
}

// generate answer and score by click
ballSection.addEventListener('click', (event) => {
  generateAnswer(event);
  getScore();
});

// reset game by button
resetGame.addEventListener('click', () => {
  resetBalls();
  resetColorReference();
  resetStartInstruction();
});
