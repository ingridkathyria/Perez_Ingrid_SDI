//Ingrid Perez
//October 14,2015.
//Conditionals Assignment


//Calculate the tip for a server in a restaurant

var billAmount;
var taxPercent;
var tipAmount;
var billTax;
var totalBill;
var tipPercent;

billAmount = Number(prompt("What is the bill amount?"));
tipPercent= Number(prompt("What percentage would you like to tip?"));
taxPercent = Number(prompt("What is the tax percent in your area?"));
tipAmount = tipPercent * billAmount;
billTax = billAmount * taxPercent;
totalBill = (billAmount + tipAmount) + billTax;

if(tipPercent < 0 ){
    console.log("Thank you! Have a nice day!")
}else{

}

