const items = ['rock', 'paper', 'scissors'];

const buttons = document.querySelector('.items');
const rockBtn = document.querySelector('.item-rock');
const paperBtn = document.querySelector('.item-paper');
const scissorsBtn = document.querySelector('.item-scissors');

const personScore = document.querySelector('.person-score strong');
const computerScore = document.querySelector('.computer-score strong');

const message = document.querySelector('.message');
const roundMsg = document.querySelector('.round-msg strong');

let playerCount = 0;
let computerCount = 0;
let rounds = 1;

function getComputerChoice() {
  return items[Math.floor(Math.random() * items.length)];
}

function playRound(playerSelection, computerSelection) {
  const resultData = {
    'rock': {
      'paper': false,
      'scissors': true
    },
    'paper': {
      'rock': true,
      'scissors': false
    },
    'scissors': {
      'rock': false,
      'paper': true,
    },
  };
  switch (resultData[playerSelection][computerSelection]) {
    case true:
      return [true, `You Win! ${playerSelection} beats ${computerSelection}`];
    case false:
      return [false, `You Lose! ${computerSelection} beats ${playerSelection}`];
    default:
      return [null, 'This is dead heat!'];
  }
}

function render(key, answer) {
  if (key === null) message.textContent = answer;
  if (key) {
    playerCount += 1;
    message.textContent = answer;
    personScore.textContent = playerCount;
  }
  if (!key && key !== null) {
    computerCount += 1;
    message.textContent = answer;
    computerScore.textContent = computerCount;
  }
  rounds += 1;
  roundMsg.textContent = rounds;
}

function isWin() {
  if (playerCount === 5 || computerCount === 5) {
    if (playerCount > computerCount) {
      buttons.replaceChildren();
      message.textContent = 'Game over! You Win!';
      return;
    }
    if (playerCount < computerCount) {
      buttons.replaceChildren();
      message.textContent = 'Game over! You Lose!';
      return;
    }
  }
}

function game() {

  rockBtn.addEventListener('click', () => {
    const playerSelection = 'rock';
    const [key, answer] = playRound(playerSelection, getComputerChoice());
    render(key, answer);
    isWin();
  });

  paperBtn.addEventListener('click', () => {
    const playerSelection = 'paper';
    const [key, answer] = playRound(playerSelection, getComputerChoice());
    render(key, answer);
    isWin();
  });

  scissorsBtn.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const [key, answer] = playRound(playerSelection, getComputerChoice());
    render(key, answer);
    isWin();
  });
}

game();