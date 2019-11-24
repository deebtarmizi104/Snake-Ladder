var btn = document.querySelector('button');
var rolled = document.querySelector('p');
var gameTurn = document.querySelector('h2');
var player = [{name: "Player 1", currPos: 0},
              {name: "Player 2", currPos: 0}];
var currTurn = 0;


function initGame()
{
  window.location.reload();
}

function GamePlay(){


  btn.addEventListener("click", function rollDice (){

    var currPlayer = player[currTurn];
    gameTurn.textContent = currPlayer.name + "'s Turn!";
    const max = 6;
    var roll = Math.ceil(Math.random() * max);

    console.log(currPlayer.name + " rolled " + roll);

    rolled.textContent = currPlayer.name + " rolled " + roll;

    currPlayer.currPos += roll;

    console.log(currPlayer.name + " new position is " + currPlayer.currPos + ".");

      if(currPlayer.currPos == 8){
        currPlayer.currPos = 15;
        console.log(currPlayer.name + " rise to position 15." + currPlayer.name + " new current position is " + currPlayer.currPos + ".");
      }
      else if(currPlayer.currPos == 15){
        currPlayer.currPos = 5;
        console.log(currPlayer.name + " fall to position 5." + currPlayer.name + " new current position is " + currPlayer.currPos + ".");
      }
      else if(currPlayer.currPos == 19){
        currPlayer.currPos = 24;
        console.log(currPlayer.name + " rise to position 24." + currPlayer.name + " new current position is " + currPlayer.currPos + ".");
      }
      else if (currPlayer.currPos == 23) {
        currPlayer.currPos = 16;
        console.log(currPlayer.name + " fall to position 16." + currPlayer.name + " new current position is " + currPlayer.currPos + ".");
      }

    if(currPlayer.currPos >= 25){
      alert(currPlayer.name + " wins!");
      initGame();
    }

    currTurn++;

    if (currTurn >= player.length) {
      currTurn = 0;
    }
  });

}

 GamePlay();
