//Ingrid Perez
//October 1,2015.
//Expression Worksheet


//Calculate how old is Sparky the pitbull in dog years based on his actual age.
/*
var result; //declared variable
var humanYears;//declared variable
var dogYears;//declared variable
var sparkysAge;//declared variable

humanYears = 1;//assigned var
dogYears = 7;//assigned variable
sparkysAge = humanYears * dogYears;//assigned variable

//result = "Sparky is " + humanYears + " human year old which is " + dogYears + " in dog years. So in three years, Sparky will be " + sparkysAge * 3 + "."";
result = " Sparky is "+ humanYears + " human year old which is " + dogYears + " in dog years. So in three years, Sparky will be " + sparkysAge * 3 + ".";
console.log(result);
*/


// Create an expression that calculates how much pizza each partygoer will get at the party.
/*
var pizzaSlices;//declared variable
var peopleAtParty;//declared variable
var numPizzas;//declared variable
var slicesPerPerson;//declared variable
var result;//declared variable

pizzaSlices = 8;//assigned variable
peopleAtParty = 10;// assigned variables
numPizzas = 4;//assigned variables
slicesPerPerson = (pizzaSlices * numPizzas)/peopleAtParty;

//“Each person ate X slices of pizza at the party.”

result = " Each person ate " + slicesPerPerson + " slices of pizza at the party.";
console.log(result);


//Assume guests get whole slices, how many whole slices will Sparky feast on?

var sparkySlices;//declared variable
sparkySlices = (pizzaSlices * numPizzas ) % peopleAtParty;

//“Sparky got X slices of pizza.”
console.log("Sparky got " + sparkySlices + " slices of pizza.");
*/
/*
// Create an expression that will use the items in the array to calculate the average amount spent on groceries.

var weeklyTotals;
var totalSpent;
var averageWeekly;

weeklyTotals = [25, 45, 40, 38, 50];
totalSpent = 25 + 45 + 40 + 38 + 50;
averageWeekly = totalSpent / 5;

//“You have spent a total of $X on groceries over 5 weeks. That is an average of $X per week”
console.log("You have spent a total of $" + totalSpent + " on groceries over 5 weeks. That is an average of $" + averageWeekly + " per week.")
*/



// Create an expression that will calculate the discounted price with and without sales tax.

var originalPrice;
var discountPercent;
var item;
var salesTax;
var itemDiscount;
var taxedItem;
var priceItemTax;
var itemAfterDiscount;
var result;

originalPrice = 5;
discountPercent = .10;
item = "shoes";
salesTax = 0.06;
itemDiscount =  originalPrice * discountPercent;
itemAfterDiscount = originalPrice - itemDiscount;
taxedItem = salesTax * itemAfterDiscount;
priceItemTax = originalPrice + salesTax;

result = "Your " + item + " was originally $" + originalPrice + " but after a " + discountPercent + "% discount, it is now $" + itemAfterDiscount +
//“Your shoes was originally $5, but after a 10% discount, it is now $X without tax, and $X with tax.”
console.log(result);