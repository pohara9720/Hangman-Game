var words =["Triceratops", "Tyrannosaurus", "Brontosaurus","Pterodactyl","Mastadon","Sabertooth", "Gastonia", "Rajasaurus", "Stegosaurus", "Confuciusornis", "Fukuisaurus", "Velociraptor", "Iguanodon", "Nodosaurus", "Riojasaurus", "Tarchia", "Tuojiangosaurus", "Eotyrannus", "Brachiosaurus", "Mammoth"]
var bank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var match= ["T","r","i","c","e","r","a","t","o","p","s"];
var dashes = "";
var sBtn = document.getElementById("Start");
var nBtn = document.getElementById("New");
var current = document.getElementById("WORD").innerHTML;
var newWord=words[Math.floor(Math.random()*words.length)];
var possibleWord=newWord;
var guessesLeft= document.getElementById("remain");
var lettersGuessed= document.getElementById("guessed");
var wins= document.getElementById("wins");
var wrong=[];

function pickAWord(){
	var newWord = words[Math.floor(Math.random()*20)];
	return newWord;

}


document.onclick=function Game(){
document.getElementById("Start").onclick = pickAWord();
document.getElementById("WORD").innerHTML=pickAWord();
document.getElementById("remain").innerHTML= 0;
document.getElementById("guessed").innerHTML= wrong;
document.getElementById("wins").innerHTML= 0;
}


document.onkeyup = function (event) {
  var bank = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(bank);
}



function underscore(newWord){
	var dashes="";
for (i = 0; i < newWord.length; i++) {
  if (match.indexOf(newWord[i])!== -1) {
dashes += newWord[i];
  }
  else {
  	dashes += "_";
  }
}
};
