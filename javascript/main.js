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



