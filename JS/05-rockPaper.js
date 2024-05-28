
/* if randomNumber between 0 and 1/3 => rock
    if randomNumber between 0 and 1/3 => paper
    if randomNumber between 0 and 1/3 => scissors


    //game algorithm: when we click a button 
    1. computer ramdomly selects a move
    2. compare the moves to get the result
    3. update a score
    4. display the result and score in popup
*/

//creat an object to update
let score = {
  wins : 0,
  losses : 0,
  ties : 0,
} || JSON.parse(localStorage.setItem('score'));

//عشان أحط في البداية انه السكور كانت كلها اصفار
updateScoreElement()

//creat a function to update score
function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

//creat a function playGame
function playGame(playMove){
  let result = '';
  let computerMove = pickComputerMove(); //global var
  
  //to know the result, start the game
  if (playMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie!';
    }
    else if (computerMove === 'paper') {
      result = 'You lose!';
    }
    else if (computerMove === 'scissors') {
      result = 'You win!';
    }
  }
  else if (playMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win!';
    }
    else if (computerMove === 'paper') {
      result = 'Tie!';
    }
    else if (computerMove === 'scissors') {
      result = 'You lose!';
    }
  }
  else if (playMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You win!';
    }
    else if (computerMove === 'paper') {
      result = 'You lose!';
    }
    else if (computerMove === 'scissors') {
      result = 'Tie!';
    }
  }

  //update score
  if (result === 'You win!'){
    score.wins += 1;
  }
  else if (result === 'You lose!') {
    score.losses += 1;
  }
  else if (result === 'Tie!') {
    score.ties += 1;
  }

  //to save score object permanently(يعني يكمل عد النتيجة من المحاولة السابقة وما يبدأ من جديد)
  localStorage.setItem("score", JSON.stringify(score));  //JSON.stringify(score) لحتى أحوله لنص

  //لحتى تبين النتيجة
  document.querySelector('.js-result').innerHTML = result;

  // لحتى يبين شو اخترت
  document.querySelector('.js-choices').innerHTML = `You
  <img src="image/${playMove}-emoji.png" alt="rock">

  - <img src="image/${computerMove}-emoji.png" alt="scissors">
  Computer`;

  //عشان أعمل تحديث للقيم وما تضلها بس صفر
  updateScoreElement();
}

//creat a function pickComputerMove
function pickComputerMove(){
  //creat a variable
  let computerMove = ' ';
  const randomNumber = Math.random();

  //generate a computer choice
  if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'rock';
  }
  else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  }
  else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }
  //return a value
  return computerMove;
}