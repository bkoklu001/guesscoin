var guessedNum;
var randomNum;

var victory = "You Won!";

randomNum = Math.floor(Math.random() * 101);

do {
  guessedNum = prompt("Enter a Number 0-100!");
  if (guessedNum < randomNum){
    alert("Go Higher!");
  }
  if (guessedNum > randomNum){
    alert("Go Lower!");
  }
}
while (guessedNum != randomNum);

if (guessedNum == randomNum){
  alert("You Win! You guessed the random number "+ randomNum + "!");
}
var restartFunc = prompt("Would you like to restart? If so, type Y in the prompt box!")

if (restartFunc = "Y" || "y"){
  document.location.reload(true)
}
