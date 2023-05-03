const items = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  return items[Math.floor(Math.random() * items.length)];
}

function playRound(playerSelection, computerSelection) {
  const playerSelectionNormalized = playerSelection.toLowerCase();
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
  switch (resultData[playerSelectionNormalized][computerSelection]) {
    case true:
      return [1, `You Win! ${playerSelectionNormalized} beats ${computerSelection}`];
    case false:
      return [-1, `You Lose! ${computerSelection} beats ${playerSelectionNormalized}`];
    default:
      return [0, 'This is dead heat!'];
  }
}

function game() {
  let count = 0;
  const rounds = 5;
  for (let i = 0; i < rounds; i += 1) {
    const playerSelection = prompt(`Enter your answer! Round: ${i + 1}`);
    if (playerSelection === null) {
      console.log('Game over! Bye!');
      return;
    }
    if (!items.includes(playerSelection.toLowerCase())) {
      console.log('Try again!');
      i -= 1;
      continue;
    }
    const computerSelection = getComputerChoice();
    const [updateCount, answer] = playRound(playerSelection, computerSelection);
    count += updateCount;
    console.log(answer);
  }
  if (count === 0) console.log('Game over! This is dead heat!');
  if (count > 0) console.log(`Game over! You Win!`);
  if (count < 0) console.log(`Game over! You Lose!`);
  return;
}

game();