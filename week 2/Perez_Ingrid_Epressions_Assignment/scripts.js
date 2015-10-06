/*Ingrid Perez
 * October 4,2015.
 *Expression Assignment
*/


//declared variables
var myHeight;
var myWeight;
var myGoal;
var poundsTOLose;

//assigned variable
myHeight = prompt("Enter your height:");
myWeight = prompt("Enter your weight: ");
myGoal = prompt("What is your weight goal?");
poundsTOLose = myWeight - myGoal;


console.log("You are " + myHeight + " tall and weigh " + myWeight + " pounds.");
console.log("To reach your goal you of " + myGoal + " you need to lose " + (myWeight - myGoal) + " pounds." )