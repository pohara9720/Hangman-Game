var words =["Triceratops", "Tyrannosaurus", "Brontosaurus","Pterodactyl","Mastadon","Sabertooth", "Gastonia", "Rajasaurus", "Stegosaurus", "Confuciusornis", "Fukuisaurus", "Velociraptor", "Iguanodon", "Nodosaurus", "Riojasaurus", "Tarchia", "Tuojiangosaurus", "Eotyrannus", "Brachiosaurus", "Mammoth"]
var newWord=words[Math.floor(Math.random()*20)];
var answerArray=[];
var wrongAnswer=[];
var remainingLetters= newWord.length;
var wrongLetter=[];
var winCounter=[];
var guessRemaining=[];
var wrongLetter= document.getElementbyId("wrongLetters");
var winCounter= document.getElementbyId("winCounter");
var guessRemaining= document.getElementbyId("guessCount");

////
var words =["Triceratops", "Tyrannosaurus", "Brontosaurus","Pterodactyl","Mastadon","Sabertooth", "Gastonia", "Rajasaurus", "Stegosaurus", "Confuciusornis", "Fukuisaurus", "Velociraptor", "Iguanodon", "Nodosaurus", "Riojasaurus", "Tarchia", "Tuojiangosaurus", "Eotyrannus", "Brachiosaurus", "Mammoth"]
var bank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var match= ["T","r","i","c","e","r","a","t","o","p","s"];
var dashes = [];
var sBtn = document.getElementById("Start");
var nBtn = document.getElementById("New");
var current = document.getElementById("WORD").innerHTML;
var newWord=words[Math.floor(Math.random()*words.length)];
var guessesLeft= document.getElementById("remain");
var lettersGuessed= document.getElementById("guessed");
var wins= document.getElementById("wins");
var wrong=[];
var newWord=words[Math.floor(Math.random()*20)];


function pickAWord(){
	var newWord = words[Math.floor(Math.random()*20)];
	return newWord;

};



document.onclick=function Game(){
document.getElementById("Start").onclick = pickAWord();
document.getElementById("WORD").innerHTML=pickAWord();
document.getElementById("remain").innerHTML= 0;
document.getElementById("guessed").innerHTML= wrong;
document.getElementById("wins").innerHTML= 0;
}


var input= document.onkeyup = function (event) {
  var bank = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(bank);
}





/////



for (var i = 0; i < newWord.length; i++) {

      answerArray[i] = "_";

    }
while(remainingLetters > 0){
remainingLetters--;
	answerArray.join(" ").innerHTML;

}

for (var j = 0; j < newWord.length; j++) {

          if (newWord[j] === guess) {

            answerArray[j] = guess;

            remainingLetters--;

          }
      };

      //     else if (newWord[j] !== guess) {
      //     	guess.push(wrongAnswer);
          	
      //     }
      // };
