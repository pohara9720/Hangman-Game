///////////////////////////////VARIABLES///////////////////////////////////////////////////


var words =["Triceratops", "Tyrannosaurus", "Brontosaurus","Pterodactyl","Mastadon","Sabertooth", "Gastonia", "Rajasaurus", "Stegosaurus", "Confuciusornis", "Fukuisaurus", "Velociraptor", "Iguanodon", "Nodosaurus", "Riojasaurus", "Tarchia", "Tuojiangosaurus", "Eotyrannus", "Brachiosaurus", "Mammoth"]
var newWord="";
var answerArray=[];
var wrongLetter=[];
var winCounter = document.getElementById("winCounter");
var winCounter= 0 ;
var guessRemaining = 8;
var dashes="";
var answer= document.getElementById("WORD");
var remainingLetters = "";
var letters = /^[A-Z]+$/;
var readyToStart = false;
///////////////////////////////KEY CODE///////////////////////////////////////////////////


document.onkeyup = function (event) {

  if (readyToStart) { /* dont do anything unless the start button was pressed */
      var bank = String.fromCharCode(event.keyCode).toUpperCase();
      console.log(bank);
      if (bank.match(letters)) { /*check if user input is a valid char */
          if (newWord.indexOf(bank) > -1) { 
              var matchPos = newWord.indexOf(bank)
              console.log("matchPos = "+matchPos)
              while (matchPos !== -1) { /* check for multiple matches */
                  answerArray[matchPos] = bank; /* add correct match postion to array */
                  matchPos = newWord.indexOf(bank, matchPos + 1); /* check again with start position incremented after match */
                  remainingLetters--;
                  console.log("remainingLetters="+remainingLetters);
              }
              answer.innerHTML=answerArray;
              if (remainingLetters <= 0) {
                //  winCounter++; // counter wont work
                //  winCounter.innerHTML = winCounter; //
                  
                  document.getElementById("WORD").innerHTML="You Guessed the Dino!";
              }
          } else {
              console.log("wrong");
              if (wrongLetter.indexOf(bank) == -1) { /* has wrong letter already been guessed? */
                wrongLetter.push(bank); /* if not then add to wrong array */
                wrongArray.innerHTML = " " + wrongLetter;  
                guessRemaining--; 
                console.log("guessremaining="+guessRemaining);
                guessCount.innerHTML = guessRemaining;
                if (guessRemaining == 0) {
                    document.getElementById("WORD").innerHTML="You Have Gone Extinct!";
                }

              }

          }

      } else {
          console.log("invalid char");
      }
  }
}
///////////////////////////////FUNCTIONS///////////////////////////////////////////////////


function pickAWord(){
	newWord = words[Math.floor(Math.random()*20)].toUpperCase();
	answer.innerHTML= newWord;
    remainingLetters = newWord.length;
	for (var i = 0; i < newWord.length; i++) {
		answerArray[i] = (" _ ");

    }
    answer.innerHTML=answerArray;
	console.log(newWord);
}


///////////////////////////////CLICK FUNCTION///////////////////////////////////////////////////

document.getElementById("Start").onclick = function(){
    pickAWord(); 
    readyToStart = true;
    document.getElementById("Start").disabled = true;
}

document.getElementById("New").onclick= function(){
	window.location.reload();
}
	
	
