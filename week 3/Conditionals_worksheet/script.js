//Ingrid Perez
//October 10,2015.
//Conditionals Worksheet




/*
//A driver has to determine if they can make it across the desert with their current fuel.
// They are about to pass the last gas station for the next 200 miles,
// and they need to determine whether they should stop now for gas or not.

var carEfficiency;//declared variable
var gaugeReading;//declared variable
var tankCapacity;//declared variable
var gallonsNeeded;//declared variable

//Gas efficiency of the car (in mpg)
carEfficiency = 30 ;
//Gauge reading of the gas tank (in %)
gaugeReading = 7 ;
//Car’s gas tank capacity (in gallons)
tankCapacity = 12;
//Gallons needed to cross the desert
gallonsNeeded = 200 / 30;

//Comparing the gauge reading on the tank with the gallons needed to cross the desert
if(gaugeReading >= gallonsNeeded){
    console.log("Yes, you can make it without stopping for gas!")
}else{console.log("You only have" + gaugeReading + "gallons of gas in your tank, better get gas now while you can!")};

//“Yes, you can make it without stopping for gas!”
// or “You only have X gallons of gas in your tank, better get gas now while you can!”
*/

//Make sure the user has the correct username and password. If the username doesn’t match then a specific message for that
// should be printed to the console. If the password doesn’t match a message should appear for that, etc. Only one error message should appear.
/*
var usernameEntered;//declared variable
var passwordEntered;//declared variable
var correctUsername;//declared variable
var correctPassword;//declared variable


//Username entered by user
usernameEntered = ("Nickname");
//Password entered by user
passwordEntered = ("password");
//Correct username
correctUsername = ("Nickname");
//Correct password
correctPassword = ("birthday");

if(usernameEntered == correctUsername && passwordEntered == correctPassword){
    console.log("Welcome, Nickname!")
}else{console.log("User not found.")}



//“Welcome, (place their username here)!”  - if the username and password is correct
//“User not found. Try again.” -if the username does not match
//“Password does not match our records.”  -if the username matches but the password does not
*/

//The local movie theater in town has a ticket price of $12.00 but if you are a senior (55 and older), under 10 you get
// the discounted price of $7.00. In addition, if a customer is seeing a movie between 3pm and 5pm they can also get the discounted price.
//Determine which of the two prices the customer is eligible for.

//Time of Movie (Assume whole numbers here)
var movieTime;
// Age of the customer
var customerAge;
//discount price for seniors 55 old and up and movies between 3pm and 5pm
var discounts;


movieTime = Number(4);
customerAge = Number(35);
discounts = ("$7.00")

if(movieTime > 5 && movieTime < 3 ! customerAge < 55){
    console.log("Ticket price is "+  +".")
}