var suc= document.getElementById("output");
const resetButton= document.getElementsByClassName("reset");
const startButton= document.getElementsByClassName("start");
const displayTimer= document.getElementById("displayTimer");
var printCharacter=document.getElementById("randomCharacter");
const mainBody = document.getElementsByClassName("main");
var result = document.getElementsByClassName("result");
var displayTable= document.getElementById("display");
const displayDiv=document.getElementsByClassName("result");
let userInputString='';
let gameLength=10;
let displayCharacter;
let [seconds, minutes]=[0,0];
let timer;
localStorage.clear();


function startTime(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
    }
    let m= minutes?.length < 2 ? "0" + minutes : minutes;
    let s= seconds?.length < 2 ? "0" + seconds : seconds;

    displayTimer.innerHTML= m + ":" +s;
}

function startTimer(){
    if(timer){
        clearInterval(timer);
    }
    timer= setInterval(startTime,1000);
    keypress();
    generateCharacters();
}

//printing generateCharacters()

function generateCharacters(){
        const alphabet="abcdefghjklmnopqrstuvwxyz";
        displayCharacter= alphabet[Math.floor(Math.random()* alphabet.length)];
        printCharacter.innerHTML= displayCharacter;
}

function keypress(){
    window.addEventListener("keypress", (e)=>{
        //localStorage.setItem(e.key,displayCharacter);
           if(e.key === printCharacter.innerHTML){
            showUserMessage(true);
            localStorage.setItem(e.key,displayCharacter);
            generateCharacters();
            userInputString += e.key;
        
           if(userInputString.length === gameLength){
            clearInterval(timer);
            displayResult();
            [seconds,minutes]=[0,0];
            displayTimer.innerHTML="00:00";
        }
    }
    else{
        showUserMessage(false);
        localStorage.setItem(e.key,displayCharacter);
    }
})
}



function showUserMessage(isCorrect){
    if(isCorrect){
        suc.innerHTML="SUCCESS";
        printCharacter.innerHTML = "";
    }
    else{
        suc.innerHTML = "Press correct key";
    }
}

function resetGame(){
    if(timer) clearInterval(timer);
    suc.innerHTML='';
    userInputString='';
    displayCharacter= undefined;
    [seconds,minutes]=[0,0];
    displayTimer.innerHTML="00:00";
    localStorage.clear();
    
}

function displayResult(){

}





