"use strict";

//Part 1 below
console.log("Hello from external JavaScript");

//Part 2 below
alert("Welcome to my Website!");
var colorFav = prompt("What is your favorite color?");
alert("My favorite color is " + colorFav + " too!");

// //Part 3.1 below
var moviePerDay = parseFloat(prompt("How much does it cost to rent a movie per day?"));
var daysLittleMermaid = parseFloat(prompt("How long did you rent Little Mermaid movie for?"));
var daysBrotherBear = parseFloat(prompt("How long did you rent Brother Bear for?"));
var daysHercules = parseFloat(prompt("How long did you rent hercules for?"));
var totalCost = (daysBrotherBear * moviePerDay) + (daysHercules * moviePerDay) + (daysLittleMermaid * moviePerDay);
alert("That will cost you $" + totalCost);

//Part 3.2 below
var googlePay = parseFloat(prompt("How many hours did you work for Google?")) * parseFloat(prompt("How much is Google paying you per hour?"));
var amazonPay = parseFloat(prompt("What are your work hours for Amazon?")) *  parseFloat(prompt("How much is Amazon paying you per hour?"));
var facebookPay = parseFloat(prompt("How many hours did you complete for Facebook?")) * parseFloat(prompt("How much is Facebook paying you per hour?"));
var totalPay = googlePay + amazonPay + facebookPay;
alert("Your pay for your contract work is: $" + totalPay);

//Part 3.3 - if and else statements included
var classTime = confirm("Press the OK button if you can have class from 9:00AM to 3:00PM.");
var classSize = confirm("Press OK if the class has an opening available for you.");
// alert("If the word at the END is true you may register for this class, if it is false you cannot. " +  (classTime && classSize))
var available = classSize && classTime;
if (available === true) {alert("You may register for this class.")}
else {alert("You may NOT register for this class.")};
//If (this part is true) { This happens} else {If none of the if statements were true then this will happen}

// //Part 3.4 - I included a final version with the if and else statements used
var itemOverTwo = parseInt(prompt("How many items did you purchase?")) > 2;
var offerExpire = confirm("Press OK if this offer is NOT expired");
var membership = confirm("Press OK if you ARE a PREMIUM member.");
var offer = (itemOverTwo || membership) && offerExpire;
//alert("If the word at the END is true you may use this offer, if it is false you cannot. " + offer )
if (offer === true) {alert("You may use this offer!")}
else {alert("You may NOT use this offer!")};
