/*Ingrid Perez
 * October 4,2015.
 *Expression Assignment
*/



var myHeightFeet;//declared variables
var myHeightIn;//declared variables
var myWeight = [myCurrentWeight, myGoal];//declared variables
var heightInches;//declared variables
var myGoal;//declared variables
var feetTOInches;//declared variables
var heightInches;//declared variables
var poundsTOLose;//declared variables


myHeightFeet = prompt ("How tall are you? Enter feet:");//assigned variable, user inputs feet
myHeightIn = prompt ("Enter inches:");//assigned variable, user inputs inches
myWeight [0] = prompt ("Enter your weight:");//assigned variable
myWeight [1] = prompt ("What is your weight goal?");//assigned variable, user goal to reach in weight
feetTOInches = Number(myHeightFeet) * 12;//calculates feet to inches
heightInches = Number(feetTOInches) + Number(myHeightIn);//calculates total inches
poundsTOLose = Number(myWeight [0]) - Number(myGoal[1]);//calculates pounds to lose
yourBMIWeight = Number(myCurrentWeight) * 703;//calculating BMI, part of the formula for calculating BMI
yourBMIInches = Number(heightInches) * Number(heightInches);//calculates BMI, part of the formula for calculating BMI
yourBMI = yourBMIWeight / yourBMIInches;//final formula for BMI calculation

console.log("According to your height and weight, your total BMI is " + yourBMI+ ".");//First output for BMI calculation
console.log("To reach your goal you of " + myGoal + " you need to lose " + poundsTOLose + " pounds." );//Output for the weight goal
//Tested the code with 3 different inputs and had the correct results. First test entered 5 feet, 6 inches, 212 pounds
// and goal of 140 pounds.
//Received output  According to your height and weight, your total BMI is 34.2139577594123.
//To reach your goal you of 140 you need to lose 72 pounds.
