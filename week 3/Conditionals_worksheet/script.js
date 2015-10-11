//Ingrid Perez
//October 10,2015.
//Conditionals Worksheet





//A driver has to determine if they can make it across the desert with their current fuel.
// They are about to pass the last gas station for the next 200 miles,
// and they need to determine whether they should stop now for gas or not.

var carEfficiency;
var gaugeReading;
var tankCapacity;
var gallonsNeeded;

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
