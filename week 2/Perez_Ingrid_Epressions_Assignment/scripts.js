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
//Tested the code with 3 different inputs and had the correct results. First test entered 5 feet, 6 inches, 212 pounds
// and goal of 140 pounds.
//Received output  According to your height and weight, your total BMI is 34.2139577594123.
//To reach your goal you of 140 you need to lose 72 pounds.
