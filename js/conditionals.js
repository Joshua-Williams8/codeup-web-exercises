"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(color){
//   color = color.toLowerCase()
//   if (color === "blue") {
//     return "Blue is the color of the ocean."
//   } else if (color === "red") {
//     return "Red is the color of robins"
//   } else if (color === "cyan") {
//     return "Cyan is a cool color."
//   } else {
//     return color + " is not a color I enjoy."
//   }
// }
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor))
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColor(color){
  color = color.toLowerCase();
  var result;
  switch (color) {
    case "blue" :
      result = "Blue is the color of the ocean.";
      return result;
      break;
    case "red" :
      result = "Red is the color of robins";
      return result;
      break;
    case "cyan" :
      result = "Cyan is a different color I guess";
      return result;
      break;
    default :
      result = color + " is a color I don't know a lot about.";
      return result;

  }
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var userFavColor = prompt("Enter a color to be analyzed.(Upper or case Lower doesn't matter.")
// alert(analyzeColor(userFavColor))
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckNumber,itemPrices) {
  if (luckNumber === 0) {
    return itemPrices
    //I could remove the first if statement.
  } else if (luckNumber === 1) {
    return itemPrices - (itemPrices * .10)
  } else if (luckNumber === 2) {
    return itemPrices - (itemPrices * .25)
  } else if (luckNumber === 3) {
    return itemPrices - (itemPrices * .35)
  } else if (luckNumber === 4) {
    return itemPrices - (itemPrices * .50)
  } else if (luckNumber === 5) {
    return 0
  } else {
    return itemPrices
    // return luckyNumber + " This number is not a lucky number. The total today is: $" + itemPrices
  }
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
// var billTotal = parseFloat(prompt("What is your bill for your items?"));
// alert("Your lucky number was: " + luckyNumber + " Your price before your discount is : $" + billTotal + " With your lucky number's discount your new total is: $" + calculateTotal(luckyNumber,billTotal));
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
var giveANumber = confirm("Would you like to enter a number?")
var isOddOrEven
var isPosOfNeg
if (giveANumber === false ) {

} else if (giveANumber === true ) {
    var aNumber = parseFloat(prompt("Please enter a number."))
    if (typeof aNumber !== "number") {
    alert("You did not enter a number")
    } }
if (aNumber % 2 === 0) {
  var isOddOrEven = "This Number is EVEN.";
} else if (aNumber % 2 === 1 || aNumber % 2 === -1 ) {
  var isOddOrEven = "This Number is ODD.";
};

if (typeof aNumber === "number") {
  var aNumberPlusHundoo = aNumber + 100;
}
//
if (aNumber > 0) {
  var isPosOrNeg = "This Number is POSITIVE.";
} else if (aNumber < 0) {
  var isPosOrNeg = "This Number is NEGATIVE.";
};
//
if (typeof isOddOrEven === "undefined"){

} else {
  alert(isOddOrEven)
}
//
if (typeof isPosOrNeg === "undefined"){

} else {
  alert(isPosOrNeg)
}
//
if (typeof isPosOrNeg === "undefined"){

} else {
  alert(aNumberPlusHundoo)
}
    // else if (aNumber % 2 === 0) {
    //   var isOddorEven = "This number is EVEN."
//     } else if (aNumber % 2 === 1) {
//       var isOddorEven = "This number is ODD."
//     }
// }
