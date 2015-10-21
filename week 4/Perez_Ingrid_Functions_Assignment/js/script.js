//Ingrid K. Perez
//October 20,2015.
//Functions Assignment



/*
//Brainstorm how to	find and return	a	group	of	random	numbers. You also need	to
consider that your function	must return	either Powerball	or	regular	Florida	lottery
numbers	but	not	both. Keep in mind that your final	project	must contain the following:
   a. At least one function.
b. Any functions	created must	use	arguments	and	parameters.
    c. A	value	must	be	returned	for	each	function.
d. You	must	not	use	“main	code”	variable	inside	of	a	function; you	must	pass	values
in	as	arguments	and	out	as	returned	values.
    e. All	user	prompts	must	be	validated	using	a	while	loop.
    */




var timesClicked = 1;//assigned value for times clicked
var pickLotto = prompt("Would you like to play the Lotto or Powerball?");//asking if user would like to play the Lotto or Powerball
//loop for timesClicked = ""
while(pickLotto === ""){
    prompt("Please enter a valid response. Would you like to play Lotto or Powerball?");
timesClicked++;
    if(timesClicked === 3){
        console.log("I am not playing your games!");
        break;
    }
}

//Functions
function lotteryNumbers(lotto, powerball){
var lotto = Math.random() *(53 - 1) + 1;
    lotto = Math.round(lotto);
var powerball = Math.random() *(59 - 1) +1;
    powerball = Math.round(powerball);
}


if(pickLotto === ""){
    console.log("You are the weakest link, Goodbye!")
}else {
    console.log("Your numbers for " + pickLotto  +" are " +  +".");
}