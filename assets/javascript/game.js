
var words =["Triceratops", "Tyrannosaurus", "Brontosaurus","Pterodactyl","Mastadon","Sabertooth", "Gastonia", "Rajasaurus", "Stegosaurus", "Confuciusornis", "Fukuisaurus", "Velociraptor", "Iguanodon", "Nodosaurus", "Riojasaurus", "Tarchia", "Tuojiangosaurus", "Eotyrannus", "Brachiosaurus", "Mammoth"]
var bank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var Gbank = ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"]

var dashes = "";
var sBtn = document.getElementById("Start");
var nBtn = document.getElementById("New");
var current = document.getElementById("WORD").innerHTML;
var nGuess= document.getElementById("remain");
var lGuess= document.getElementById("guessed");
var wins= document.getElementById("wins");
var newWord=words[Math.floor(Math.random()*words.length)];
var correct;


function pickAWord(){
	var newWord = words[Math.floor(Math.random()*20)];
	return newWord;

}
function initialize(){
	lGuess=0;
	nGuess=0;
	wins=0;

}

document.onclick=function Game(){
document.getElementById("Start").onclick = pickAWord();underscore();
document.getElementById("WORD").innerHTML=pickAWord();
document.getElementById("remain").innerHTML= "8";
document.getElementById("guessed").innerHTML=" None";
document.getElementById("wins").innerHTML=" 0";
}


document.onkeyup = function (event) {
  var current = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(current);
}

function underscore(){
for (i = 0; i < newWord.length; i++) {
  if (newWord.charAt(i) == " ") {
    dashes += " ";
  } else {
    dashes += "-";
  }
}
};