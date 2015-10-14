//Ingrid Perez
//October 14,2015.
//Conditionals Assignment


//Calculate the tip for a server in a restaurant

var billAmount;
var taxPercent;
var tipAmount;
var billTax;
tipPercent = [ 10, 15, 20];

billAmount = prompt("What is the bill amount?");
tipPercent[0]= prompt("What percentage would you like to tip?"+[10] +" "+[15]+" or "+[20]);
taxPercent = prompt("What is the tax percent in your area?");
tipAmount = tipPercent * billAmount;
billTax = billAmount * taxPercent;

