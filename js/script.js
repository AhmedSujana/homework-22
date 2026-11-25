let inputName = document.getElementById("inputName");
let startBtn = document.getElementById("startBtn");
let errorMsg = document.getElementById("errorMsg");
let welcomeScreen = document.getElementById("welcomeScreen");
let gameScreen = document.getElementById("gameScreen");
// ================
let playBtn = document.getElementById("playBtn");
let inputNumber = document.getElementById("inputNumber");
let numberError = document.getElementById("numberError");
//1st page er kaj
startBtn.addEventListener("click", function() {
    let name = inputName.value.trim();
    
    if (name === "") {
        errorMsg.hidden = false;
        errorMsg.style.color = "red";
    } else {
        errorMsg.hidden = true;
         welcomeScreen.hidden = true;
         gameScreen.hidden = false;
    }
});


// 2nd Page er kaj
playBtn.addEventListener("click", function(){
  if(inputNumber.value.trim() === ""){
    numberError.hidden = false;
  } else {
    numberError.hidden = true;
    alert("Player-1 gave: " + inputNumber.value);
  }
});

// 3rd page er kaj
let number = 0;

playBtn.onclick = () => {
  if(!inputNumber.value){
    numberError.hidden = false;
  } else {
    number = inputNumber.value; // number save
    gameScreen.hidden = true;
    player2Screen.hidden = false;
  }
}

// 3 number page -> 4 number page
player2Btn.onclick = () => {
  if(!player2Name.value){
    player2Error.hidden = false;
  } else {
    player2Screen.hidden = true;
    guessScreen.hidden = false;
    chanceText.innerText = "Chance left: 3";
  }
}

