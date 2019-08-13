var wins = 0;
var losses = 0;
var guessesLeft = 9;

var wordList = ["bulls", "lakers", "warriors"];

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

var chosenWord ="";

var numBlanks = 0;

var lettersInChosenWord =[];

var blanksAndSuccesses = [];

var letterGuessed = "";

var wrongGuesses = [];

function startGame() {

    guessesLeft= 9;
  
    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
  
    lettersInChosenWord = chosenWord.split("");
  
    numBlanks = lettersInChosenWord.length;
  
    console.log(chosenWord);
  
    blanksAndSuccesses = [];
  
    wrongGuesses = [];

    for (var i = 0; i < numBlanks; i++) {
      blanksAndSuccesses.push("_");
    }
    console.log(blanksAndSuccesses);
  
    document.getElementById("#rem-guesses").innerHTML = guessesLeft;
  
    document.getElementById("#under-score").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("#let-guessed").innerHTML = wrongGuesses.join(" ");
  }


for (var i = 0; i < letters.length; i++) {
  var letterBtn = $("<button>");

  letterBtn.addClass("letter-button letter letter-button-color");

  letterBtn.attr("data-letter", letters[i]);
  
  letterBtn.text(letters[i]);
 
  $("#buttons").append(letterBtn);

}

function checkLetters(letter) {

    var letterInWord = false;
  
    for (var i = 0; i < numBlanks; i++) {
  
      if (chosenWord[i] === letter) {
        letterInWord = true;
      }
    }

    if (letterInWord) {

      for (var j = 0; j < numBlanks; j++) {
  
        if (chosenWord[j] === letter) {
  
          blanksAndSuccesses[j] = letter;
        }
      }

      console.log(blanksAndSuccesses);
    }
  
    else {
  
      wrongGuesses.push(letter);
      guessesLeft--;
    }
  
  }

  function roundComplete() {

    console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + guessesLeft);
  

    document.getElementById("guesses-left").innerHTML = guessesLeft;
  
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
  
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

    if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
  
      winCounter++;
  
      alert("You win!");
  
      document.getElementById("win-counter").innerHTML = winCounter;
  
      startGame();
    }

    else if (guessesLeft === 0) {
  
      lossCounter++;

      alert("You lose");

      document.getElementById("loss-counter").innerHTML = lossCounter;

      startGame();
  
    }
  
  }

  startGame();
  

  document.onkeyup = function(event) {
  
    letterGuessed = String.fromCharCode(event.which).toLowerCase();

    checkLetters(letterGuessed);
    roundComplete();
  };
