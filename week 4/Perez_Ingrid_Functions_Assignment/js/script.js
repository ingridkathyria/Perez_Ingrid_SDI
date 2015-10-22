//Ingrid K. Perez
//October 20,2015.
//Functions Assignment

//variables
var pickLotto = prompt("Would you like to play the Lotto or Powerball? \nPlease type lotto or type powerball.");//asking if user would like to play the Lotto or Powerball
var randomLotto;//declared variables
var randomPowerbNum;//declared variables
var randomSingleBall;//declared variables
var timesClicked = 1;//assigned value for times clicked

//arguments and parameters in use
randomLotto = randomNumGen(1,53,6);
randomPowerbNum = randomNumGen(1,59,5);
randomSingleBall = randomNumGen(1,35,1);


//loop for timesClicked when user inputs = ""
while(pickLotto === ""){
    prompt("Please enter a valid response. Would you like to play Lotto or Powerball?");//response when user inputs ""
timesClicked++;
    if(timesClicked === 3){
        console.log("I am not playing your games!");//output when input = ""
        break;//breaks the loop
    }
}

//Function
function randomNumGen(min,max,num){//function to create an array of random numbers
    var randomArray = [];
    var randomNum;//declaring array
    for(var i = 0; i < num; i++) {
     randomNum = Math.random() * (max - min) + min;//chooses random numbers
    randomArray[i] = Math.round(randomNum);//rounds the numbers

}
    return randomArray;//return output for the function

}


//if/else for outputs
if(pickLotto === ""){
    console.log("You are the weakest link, Goodbye!")
}else{
    if (pickLotto === "powerball") {
        console.log(" Your powerball numbers are " + randomPowerbNum + " and your powerball is " + randomSingleBall + ".");
    }else{
        (pickLotto === "lotto")
        {
            console.log("Your lotto numbers are " + randomLotto + ".")
        }
    }
}