//Ingrid Perez
//October 14,2015.
//Conditionals Assignment


//Calculate the tip for a server in a restaurant.User will input the bill amount, tip percent and tax percent.

var billAmount;//declared variable
var taxPercent;//declared variable
var tipAmount;//declared variable
var totalTip;//declared variable
var billTax;//declared variable
var totalBill;//declared variable
var tipPercent;//declared variable
var totalTax;//declared variable


billAmount = prompt("What is the bill amount?"); //total amount for the bill

if(billAmount === " " && billAmount !== Number("")){
    billAmount = prompt("That is not a number! \nPlease enter a number!");
    console.log("This is the amount due.");
}else{
    console.log("Tip and tax is not included.");
}

billAmount = Number(billAmount);

tipPercent = prompt("What percentage would you like to tip?");//percent tip to add to bill

if(tipPercent === " " || tipPercent !== Number ("")){
   tipPercent =  prompt("That is not a number! \nPlease enter a number!");
    console.log("Tip according to service.");
}else{
    console.log("Tip will be added to the bill.");
}

tipPercent = Number(tipPercent);

taxPercent = prompt("What is the tax percent in your area?");//tax percent in the area
if(taxPercent === " " || taxPercent !== Number("")){
   taxPercent =  prompt("Please enter a valid number.");
    console.log("Tax according to county.")
}else{
    console.log("Tax will be added to the bill.");
}
taxPercent = Number(taxPercent);


taxPercent = Number(taxPercent);
totalTip   = tipPercent / 100;//turns into percent
tipAmount  = totalTip * billAmount;//calculate the tip
billTax    = taxPercent/100;//turns into percent
totalTax   = billTax * billAmount;//calculate the tax
totalBill  = billAmount + tipAmount + totalTax;//adds bill with the tip and tax




if(tipPercent >= 0 && tipPercent <= 10 ){
    console.log("Your total bill with tip and tax is "+ totalBill+". ");
}else{
    console.log("Your total bill with tip and tax is "+ totalBill+". Thank you!");
}

//Ternaries, if tip is more than 15 console.log("Thank you so much! Please come see me again!"
//Otherwise console.log ("Have a nice day!")
(tipPercent > 15) ? console.log("Thank you so much! Please come see me again!") : console.log("Have a nice day!");



