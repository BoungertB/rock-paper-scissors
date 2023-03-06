function getComputerChoice() {
  const choicesArray = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = (Math.floor(Math.random() * 3));
  return choicesArray[randomNumber];
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return('Tie');
  } else if (
    (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
    (playerSelection == 'Paper' && computerSelection == 'Rock') ||
    (playerSelection == 'Scissors' && computerSelection == 'Paper')  
  ) { 
    return('Player');
  } else {
    return('Computer')
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if(result == ('Tie')) {
    return (`User selected ${playerSelection} and Computer selected ${computerSelection}. Tie game!`);
  } else if(result == 'Player') {
      return (`User selected ${playerSelection} and Computer selected ${computerSelection}. You win!`);
  } else {
      return(`Computer selected ${computerSelection} and User selected ${playerSelection}. You lose!`);
  }
}

function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;
  for (let i = 0; i < 5; i++) {
    let question = prompt('Rock, Paper or Scissors?');
    let playerSelection = question.charAt(0).toUpperCase() + question.slice(1).toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (checkWinner(playerSelection, computerSelection) == 'Player') {
      scorePlayer++;
    } else if (checkWinner(playerSelection, computerSelection) == 'Computer') {
      scoreComputer++;
    } 
  }
  console.log('Game over')
  if (scorePlayer > scoreComputer) {
    console.log('Player wins!');
  } else if (scorePlayer < scoreComputer) {
    console.log('Computer wins!');
  } else {
    console.log('Tie game!');
  }
}
game();



