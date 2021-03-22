"use strict" ;

var dude = " my guy";
//console.log("YOOOOO I'M IN HERE" + dude);
//Single line comment
/* block
* multi
* line
* comment
 */
// var num = parseFloat(prompt("Gimme a number..."));
//console.log("user enter: " + num + "That number plus 17 is: " + (num + 17))
// var canIGo = confirm("Can I go to gym?");
// console.log(canIGo)
//alert("You have a virus");

// var result = (function () {
//   var name = "Barry";
//   return name;
// })();
// var boi = function(y) {
//   return y * y;
// };

// function greeting(name) {
//   alert('Hello ' + name);
// }
//
// function processUserInput(callback) {
//   var name = prompt('Please enter your name.');
//   callback(name);
// }
//
// processUserInput(greeting);


// console.log(Testiboi("Josh"))
//
// var Testiboi = function me(x) {
//   return "Something I did " + x
// }
// above doesn't work cause variables aren't hoisted like a regular function declaration would be.
//Below is a regular if else statement for looking at purposes for comparing.

// var success = 2;
// var message = (success === true) ? "Operation was successful." : (success === false) ? "Oops, something went wrong." : "This isn't a boolean?";
//
// var message;
// if (success === true) {
//   //You could just put success in here cause if it is true it'll do the operation but it's easier to read with the === true part
//   message = "Operation was successful.";
// } else if (success === false) {
//   message = "Oops, something went wrong.(false)";
// } else {
//   message = "This was not a true or false thingy guy"}

//Below is a an example of me using a break, instead of an if else or a ternary expression
// var success = 2
// switch(success) {
//   case true :
//     console.log("Operation was successful");
//     break;
//   case false :
//     console.log("Operation was unsuccessful (false)");
//     break;
//     case false :
//     console.log("Operation was unsuccessful (false)");
//     break;
//   default:
//     console.log("This is not a true or false")
//     break; //break is optional here.
// }
//The case part above, is like saying, if the input is === case
//The : is what we do if the case part is true.

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
  }
}
//Below is above but using a switch statement.
// function calculateTotalSwitch(luckNumber,itemPrices) {
//   switch (luckNumber) {
//     case 0 :
//       return itemPrices
//       break;
//     case 1 :
//       return itemPrices - (itemPrices * .10);
//       break;
//     case 2 :
//       return itemPrices - (itemPrices * .25);
//     case 3 :
//       return itemPrices - (itemPrices * .35);
//       break;
//     case 4 :
//       return itemPrices - (itemPrices * .50);
//       break;
//     case 5 :
//       return 0;
//       break;
//     default:
//       return itemPrices
//   }
// }


//The variable below is asking if the user wants to give a number to us.
var giveANumber = confirm("Would you like to enter a number?")
//I'm defined these are undefined because it's logic for a later part.
var isOddOrEven
var isPosOfNeg

//Below is if the user hits cancel or DOES NOT want to give us a number, the empty execute ends the if statement.
if (giveANumber === false ) {

  //Below is if the user did say yes to our confirm, then I want to create a variable called aNumber, and give them a prompt to fill with that number.
} else if (giveANumber === true ) {
  var aNumber = parseFloat(prompt("Please enter a number."))
  //The if statement below is if the user doesn't enter a number in the prompt then I alert them they didn't.
  if (isNaN(aNumber) === true) {
    alert("You did not enter a number")
    //I didn't use an else statement, but if I did, I would leave it blank because I don't want to execute any code.
  }
}
//Below we are converting the 3 requirements to functions (isOdd/Even isPos/Neg and plus100)
//Below is the function to tell if something is odd or even.
function isOddOrEvenFun(number) {
  if (number % 2 === 0 && aNumber !== 0) {
    //I'm defining a va
    var isOddOrEvenFun = "This Number is EVEN.";
  } else if (number % 2 === 1 || number % 2 === -1 ) {
    var isOddOrEvenFun = "This Number is ODD.";
  } else if(number === 0) {
    var isOddOrEvenFun = "This Number is 0 so it's NOT EVEN OR ODD."
  } else {
    return
  }
  return isOddOrEvenFun
}
//Below are the other statements required for the alerts.
//If the number from the prompt earlier divided by 2 doesn't have a remainder then...
if (aNumber % 2 === 0 && aNumber !== 0) {
  //I'm defining a va
  var isOddOrEven = "This Number is EVEN.";
} else if (aNumber % 2 === 1 || aNumber % 2 === -1 ) {
  var isOddOrEven = "This Number is ODD.";
} else if(aNumber === 0) {
  var isOddOrEven = "This Number is 0 so it's NOT EVEN OR ODD."
} else {

}
//Below is a function for adding 100
function addOneHundooFun(number) {
  if ((typeof number === "number") && (isNaN(number) === false)) {
    var aNumberPlusHundooFun = number + 100;
    var aNumberPlusHundooStringFun = number + " + 100 is " + aNumberPlusHundooFun;
    return aNumberPlusHundooStringFun
  }
};

//Above is the function version of below
//I need the second half of this && statement because if the aNumber value is NaN, then I don't want to create the variable.
if ((typeof aNumber === "number") && (isNaN(aNumber) === false)) {
  var aNumberPlusHundoo = aNumber + 100;
  var aNumberPlusHundooString = aNumber + " + 100 is "+ aNumberPlusHundoo;
}
//Below is the function version of checking if a number is positive or negative.
function isPosOrNegFun(number){
  if (number > 0) {
    var isPosOrNegFun = "This Number is POSITIVE.";
  } else if (number < 0) {
    var isPosOrNegFun = "This Number is NEGATIVE.";
  } else if(number === 0) {
    var isPosOrNegFun = "this Number is 0 so it's NEITHER."
  } else {

  }
  return isPosOrNegFun
}
// Below tells if the number is positive or negative.
if (aNumber > 0) {
  var isPosOrNeg = "This Number is POSITIVE.";
} else if (aNumber < 0) {
  var isPosOrNeg = "This Number is NEGATIVE.";
}  else if(aNumber = 0) {
  var isPosOrNegFun = "this Number is 0 so it's NEITHER."
} else {

}
//
if (typeof isOddOrEven === "undefined"){

} else {
  alert(isOddOrEven);
};
//
if (typeof isPosOrNeg === "undefined"){

} else {
  alert(isPosOrNeg);
};
//
if (typeof aNumberPlusHundoo === "undefined"){

} else {
  alert(aNumberPlusHundooString);
};
