var randomNum;
var guessesLeft

var loopCounter

//if i want saving, i need to take out newGame and the onload function.

//I just want to justify that I am adding on to alex castro's guessing game. All rights to him.


function newGame() {
  randomNum = Math.floor(Math.random() * 101);
	guessesLeft = 10;
	document.getElementById("guessesRemaining").innerHTML = "Guesses remaining: " + guessesLeft;

  document.getElementById("guessInput").style.visibility = "visible";

	document.getElementById("guessStatus").innerHTML = "";

	document.getElementById("guessEnter").value = "Guess";
	document.getElementById("guessEnter").onclick = guessedNum;
}
window.onload = function() {
	newGame();
}

function guessedNum()
{
	var guessInput = document.getElementById("guessInput");
	var guessEnter = document.getElementById("guessEnter");
	var guessStatus = document.getElementById("guessStatus");
	var guess = guessInput.value;

  if(isNaN(guess) || guess < 1 || guess > 100)
	{
		guessStatus.innerHTML = "You didn't enter a valid number";
		return;
	}
	guessesLeft--;
	document.getElementById("guessesRemaining").innerHTML = "Guesses left: " + guessesLeft;


	if(guessesLeft == 0 || guess == randomNum) {
			guessEnter.value = "Try Again?";
      document.getElementById("guessInput").style.visibility = "hidden";
			guessEnter.onclick = newGame;
			if(guessesLeft == 0) {
				guessStatus.innerHTML = "You're out of guesses!";
			}
			if (guessesLeft >= 1 && guessesLeft <= 10) {
				guessStatus.innerHTML = "You just won a game of Guess Coin!";
			}
	}
	else if(guess < randomNum) {
		guessStatus.innerHTML = "Your guess was too low.";
	}
	else{
		guessStatus.innerHTML = "Your guess was too high.";
	}
	guessInput.value = null;
}
