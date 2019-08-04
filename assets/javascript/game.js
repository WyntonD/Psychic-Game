
// Reference for html location//
var directionsText = document.getElementById("directions-text");    
// Reference for wins placment location
var wins = 0;
var numwins = 0;
var winsText = document.getElementById("wins-text");


var rightWord = [];
var wrongWord = [];
var underScore = [];
var guesses = ["_"]; 

var lineScore = document.getElementById("text-box");
var rightGuess = document.getElementById("rem-guesses");
var wrongGuess = document.getElementById("wrongGuess");
var numWins = document.getElementById("wins-text");

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "_"];
var word = ["bulls", "lakers", "warriors"];    
var images =["https://i1.wp.com/img.gawkerassets.com/img/18equ9kf1w96wjpg/original.jpg?resize=518%2C292", "https://newtheory.com/wp-content/uploads/2016/04/cd0ymzcznguwzdbhnduynddiytjhm2yyzthlmtjjotqwyyznpwu2y2e5zdq2ztvmy2y5odi1mde1ntm2njvmnme1zwnl.jpeg", "https://cdn.vox-cdn.com/thumbor/xqFDx4EqonlVRsKQo7egI37VfjQ=/0x0:3000x2349/1200x800/filters:focal(1049x456:1529x936)/cdn.vox-cdn.com/uploads/chorus_image/image/59423883/924718000.jpg.0.jpg"];


document.write("<li><img src='" + images[0] + "</li>");

var randNum = Math.floor(Math.random() * word.length);
var chosenWord = word[randNum];
    
    console.log(chosenWord);

var generateUnderscor = () => {
    for (var i=0; i < chosenWord.length; i++) {
        underScore.push("_");
    }
    return underScore;
}
// For loop for chosen word

// Key stroke Javascript event for individual characters
document.addEventListener('keypress', (event) => {
    var keyWord = newFunction(event);
     var makeScore = () => {
        for (var i = 0; i < word.length; i++) {
                underScore.push("_");
                docUnderScore[0].innerHtml = underScore.join(' ');
            }   
        return underScore;
     }
    
var underScore = document.getElementsByClassName('underScore');
    
    if (chosenWord.indexOf(keyWord) > -1) {
       
        rightWord.push(keyWord);
        console.log(rightWord);

        underScore[chosenWord.indexOf(keyWord)] = keyWord;
      }
        underScore [chosenWord.indexOf(keyWord)] === keyWord;

        if (underScore.join(keyWord) == chosenWord) {
            alert("You Win!");
         $("#wins-text").text(numwins++);
     }
     else {

     }
}
);
document.onkeyup = function(event) {
    var userGuess = event.key;
}

$("#clear").on("click", function() {
    $("#display").empty();
});


function newFunction(event) {
    return String.fromCharCode(event.keyCode);
}

