const boxes = document.querySelectorAll('.box');
const message = document.querySelector('.message');
const playO = document.querySelector('.playO');
const playX = document.querySelector('.playX');

let whoPlays
playX.addEventListener('click', function() {
clear();
  whoPlays = {player: 'x', computer: 'o'}
})
playO.addEventListener('click', function() {
clear();
  whoPlays = {player: 'o', computer: 'x'}
  computerMove()
})



for (let box of boxes) {
  box.addEventListener('click', playerMove);
}

function playerMove(event) {
  console.log(event);
  const currentBox = event.target;
  if (currentBox.innerHTML == '') {
    currentBox.innerHTML = whoPlays.player;
    checkIfYouWin();
    if(message.innerHTML == '') {
      setTimeout(computerMove, 200);
    }
  }
}

function computerMove() {
  const randomBox = boxes[Math.floor(Math.random()*boxes.length)];
  if (randomBox.innerHTML !== '') {
    computerMove();
  }
  else {
    randomBox.innerHTML = whoPlays.computer;
  }
  checkIfYouLose();
}

function checkIfYouWin() {
  if ((boxes[0].innerHTML == whoPlays.player && boxes[1].innerHTML == whoPlays.player && boxes[2].innerHTML == whoPlays.player) || (boxes[3].innerHTML == whoPlays.player && boxes[4].innerHTML == whoPlays.player && boxes[5].innerHTML == whoPlays.player) || (boxes[6].innerHTML == whoPlays.player && boxes[7].innerHTML == whoPlays.player && boxes[8].innerHTML == whoPlays.player) || (boxes[0].innerHTML == whoPlays.player && boxes[3].innerHTML == whoPlays.player && boxes[6].innerHTML == whoPlays.player) || (boxes[1].innerHTML == whoPlays.player && boxes[4].innerHTML == whoPlays.player && boxes[7].innerHTML == whoPlays.player) || (boxes[2].innerHTML == whoPlays.player && boxes[5].innerHTML == whoPlays.player && boxes[8].innerHTML == whoPlays.player) || (boxes[2].innerHTML == whoPlays.player && boxes[4].innerHTML == whoPlays.player && boxes[6].innerHTML == whoPlays.player) || (boxes[0].innerHTML == whoPlays.player && boxes[4].innerHTML == whoPlays.player && boxes[8].innerHTML == whoPlays.player))
  {
    message.innerHTML = 'Победа!';
  }
}

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clear);
function clear() {
    for(let box of boxes) {
      box.innerHTML = '';
    }
    message.innerHTML = '';
}
  
    
    
    

function checkIfYouLose() {
  if ((boxes[0].innerHTML == whoPlays.computer && boxes[1].innerHTML == whoPlays.computer && boxes[2].innerHTML == whoPlays.computer) || (boxes[3].innerHTML == whoPlays.computer && boxes[4].innerHTML == whoPlays.computer && boxes[5].innerHTML == whoPlays.computer) || (boxes[6].innerHTML == whoPlays.computer && boxes[7].innerHTML == whoPlays.computer && boxes[8].innerHTML == whoPlays.computer) || (boxes[0].innerHTML == whoPlays.computer && boxes[3].innerHTML == whoPlays.computer && boxes[6].innerHTML == whoPlays.computer) || (boxes[1].innerHTML == whoPlays.computer && boxes[4].innerHTML == whoPlays.computer && boxes[7].innerHTML == whoPlays.computer) || (boxes[2].innerHTML == whoPlays.computer && boxes[5].innerHTML == whoPlays.computer && boxes[8].innerHTML == whoPlays.computer) || (boxes[2].innerHTML == whoPlays.computer && boxes[4].innerHTML == whoPlays.computer && boxes[6].innerHTML == whoPlays.computer) || (boxes[0].innerHTML == whoPlays.computer && boxes[4].innerHTML == whoPlays.computer && boxes[8].innerHTML == whoPlays.computer))
  {
    message.innerHTML = 'Поражение!';
  }
}