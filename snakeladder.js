var canvas = document.querySelector('canvas');
var context = canvas.getContext("2d");    //access drawing context in canvas by 2D

  var rows =  5;
  var cols = 5;
  var squareSize = 100;
  var x =0;
  var y = canvas.height - squareSize;
  var squareIndex = 1;

    var a = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = Math.floor(Math.random() * 256);


    context.fillStyle = "rgb(" + a + "," + b + "," + c + ")";


  for(var i = 0 ; i <= rows ; i++){


    for(var j = 0 ; j <= cols ; j++){
      context.fill();
      context.fillRect(squareSize * i, squareSize * j, squareSize, squareSize);
      context.strokeRect(squareSize * i, squareSize * j, squareSize, squareSize);

    }

  }


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
