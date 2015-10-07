/*Ingrid Perez
 * October 4,2015.
 *Expression Assignment
*/



var myHeightFeet;//declared variables
var myHeightIn;//declared variables
var myWeight;//declared variables
var heightInches;//declared variables
var myGoal;//declared variables
var feetTOInches;//declared variables
var heightInches;//declared variables
var poundsTOLose;//declared variables


myHeightFeet = prompt ("How tall are you? Enter feet:");//assigned variable
myHeightIn = prompt ("Enter inches:");//assigned variable
myWeight = prompt ("Enter your weight:");//assigned variable
myGoal = prompt ("What is your weight goal?");//assigned variable
feetTOInches = Number(myHeightFeet) * 12;//calculates feet to inches
heightInches = Number(feetTOInches) + Number(myHeightIn);//calculates total inches
poundsTOLose = Number(myWeight) - Number(myGoal);//calculates pounds to lose
yourBMIWeight = Number(myWeight) * 703;
yourBMIInches = Number(heightInches) * Number(heightInches);//calculates BMI
yourBMI = yourBMIWeight / yourBMIInches;

console.log("According to your height and weight, your total BMI is " + yourBMI+ ".");
console.log("To reach your goal you of " + myGoal + " you need to lose " + poundsTOLose + " pounds." );
