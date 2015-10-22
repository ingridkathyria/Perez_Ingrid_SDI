//Ingrid K. Perez
//October 20,2015.
//Functions Assignment

//variables
var pickLotto = prompt("Would you like to play the Lotto or Powerball?");//asking if user would like to play the Lotto or Powerball
var randomLotto;//declared variables
var randomPowerbNum;//declared variables
var randomSingleBall;//declared variables
var timesClicked = 1;//assigned value for times clicked


//loop for timesClicked when user inputs = ""
while(pickLotto === ""){//
    prompt("Please enter a valid response. Would you like to play Lotto or Powerball?");//response when user inputs ""
timesClicked++;
    if(timesClicked === 3){
        console.log("I am not playing your games!");
        break;
    }
}

//Functions
function lottoNumbers(){
    var lotto = [];
for(i = 0; i < 6; i++) {
     lotto[i] = Math.random() * (53 - 1) + 1;
    lotto[i] = Math.round(lotto[i]);
   
}
    return lotto;

}

function powerballNumbers(){
    var powerball = [];
    for(i=0; i< 5; i++) {
        powerball[i] = Math.random() * (59 - 1) + 1;
        powerball[i] = Math.round(powerball[i]);
    }
    return powerball;

}
function singlePowerball(){
    var singlePowerb = Math.random() * (35 - 1) + 1;
    singlePowerb = Math.round(singlePowerb);
    return singlePowerb;

}

randomLotto = lottoNumbers(53, 1);
randomPowerbNum = powerballNumbers(59, 1);
randomSingleBall = singlePowerball(35, 1);



if(pickLotto === ""){
    console.log("You are the weakest link, Goodbye!")
}else {
    if (pickLotto === "powerball") {
        console.log(" Your powerball numbers are " + randomPowerbNum + " and your powerball is " + randomSingleBall + ".");
    }else {
        (pickLotto === "lotto")
        {
            console.log("Your lotto numbers are " + randomLotto + ".")
        }
    }
}