///////////////////////////////VARIABLES///////////////////////////////////////////////////


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
///////////////////////////////KEY CODE///////////////////////////////////////////////////


document.onkeyup = function (event) {

  var bank = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(bank);
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
    
};
///////////////////////////////CLICK FUNCTION///////////////////////////////////////////////////

document.getElementById("Start").onclick = function(){
	pickAWord(); 
};


	
