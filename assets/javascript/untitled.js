//////////////////////////////VARIABLES///////////////////////////////////////////////////


var words =["Triceratops", "Tyrannosaurus", "Brontosaurus","Pterodactyl","Mastadon","Sabertooth", "Gastonia", "Rajasaurus", "Stegosaurus", "Confuciusornis", "Fukuisaurus", "Velociraptor", "Iguanodon", "Nodosaurus", "Riojasaurus", "Tarchia", "Tuojiangosaurus", "Eotyrannus", "Brachiosaurus", "Mammoth"]
var newWord=words[Math.floor(Math.random()*20)];
var answerArray=[];
var wrongLetter=[];
var winCounter= 0 ;
var guessRemaining= 8;
var wrongLetters= document.getElementById("wrongArray");
var winCounter= document.getElementById("winCounter");
var guessRemaining= document.getElementById("guessCount");
var dashes="";
var answer= document.getElementById("WORD");
var remainingLetters = newWord.length;

///////////////////////////////KEY CODE///////////////////////////////////////////////////


document.onkeyup = function (event) {
  var guess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(guess);
  return guess;
};




///////////////////////////////FUNCTIONS///////////////////////////////////////////////////


function pickAWord(){
	var newWord = words[Math.floor(Math.random()*20)];
	answer.innerHTML= newWord;
	wrongLetters.innerHTML= " None" ;
	winCounter.innerHTML=  0;
	guessRemaining.innerHTML= 8;
	for (var i = 0; i < newWord.length; i++) {
		answerArray[i] = (" _ ");
      	
  };
      answer.innerHTML=answerArray;
	
	console.log(newWord);
    
}

if(newWord.indexOf(guess > -1)) {
	answerArray.push("guess");
	console.log (answerArray);
}
else { guessRemaining --;
	wrongLetter.push("guess");

}
if (guessRemaining=== 0) {

	answer.innerHTML="You've gone Extinct";
}
else {
	answer.innerHTML="You guessed the Dino!"
}
///////////////////////////////CLICK FUNCTION///////////////////////////////////////////////////

document.getElementById("Start").onclick = function(){
	pickAWord(); 
};

document.getElementById("New").onclick= function(){
	window.location.reload();
};

