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

document.onkeyup = function (event) {

  var bank = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(bank);
}

function pickAWord(){
	var newWord = words[Math.floor(Math.random()*20)];
	document.getElementById("WORD").innerHTML= newWord;
	wrongLetters.innerHTML= " None" ;
	winCounter.innerHTML=  0;
	guessRemaining.innerHTML= 8;
	for (var i = 0; i < newWord.length; i++) {

		answerArray=newWord.length;
      	answerArray.push("_");
  };
      answer.innerHTML=answerArray;
	
	console.log(newWord);
    
};



document.getElementById("Start").onclick = function(){
	pickAWord(); 
};




	
