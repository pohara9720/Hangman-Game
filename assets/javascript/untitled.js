var sBtn = document.getElementById("Start");
var nBtn = document.getElementById("New");

function Game(){
document.getElementById("Start").onclick = pickAWord();
document.getElementById("WORD").innerHTML=pickAWord();

}

function Game(){
sBtn.addEventListener("click" , pickAWord);
current.innerHTML=pickAWord();
}


var sBtn = document.getElementById("Start");
var nBtn = document.getElementById("New");
var current = document.getElementById("WORD").innerHTML=pickAWord();

function Game(){
document.getElementById("Start").onclick = pickAWord();
document.getElementById("WORD").innerHTML=pickAWord();

}

function pickAWord(){
	var newWord = words[Math.floor(Math.random()*20)];
	return newWord;

}



document.onkeyup = function (event) {
  var lGuess.innerHTML = String.fromCharCode(event.keyCode).toLowerCase();
};