var randomNum;
var guessesLeft

var loopCounter

//if i want saving, i need to take out newGame and the onload function.

//I just want to justify that I am adding on to alex castro's guessing game. All rights to him.



randomNum = Math.floor(Math.random() * 101);

function newGame() {
	guessesLeft = 10;
	document.getElementById("guessesRemaining").innerHTML = "Guesses remaining: " + guessesLeft;

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

  if(isNaN(guess) || guess < 1)
	{
		guessStatus.innerHTML = "You didn't enter a valid number";
		return;
	}
	guessesLeft--;
	document.getElementById("guessesRemaining").innerHTML = "Guesses left: " + guessesLeft;

  //victory results here

	if(guessesLeft == 0 || guess == randomNum) {
			guessEnter.value = "Try Again?";
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
