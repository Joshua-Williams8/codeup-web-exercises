"use strict"

// Stuff from pre-work I want to understand better below
function removeVowels(string){
  //for does a loop as long as the thing below
//Below we're saying
  for (var a = 0; a < string.length; a++) {
    //
    var letter = string.charAt(a);
    //Above we create the variable letter, which uses the charAt command with the a variable
    //The charAt function says what character is at what position like how if you do Array[1] for an array it says the 2nd item in the array
    //The A variable is a number that is counting up as we go through each iteration of the function
    // letter will be each letter in the input
    if (isVowel(letter)){
      //Above we are saying if the input of letter comes out true from our function isVowel
      //Continue with the function to replace(), if not it will not conitune, and move on to the next letter
      //letter will be each letter in the word as shown above because it's part of the "for"
      string = string.replace(letter, "");
      //Above I took the string, and redefined as it with the removed letter from each iteration
    }

    //above closes the if {}
  }
  // above closes the for {}
  return string
  //The return command needs to be here because it needs to let the for run through each letter, and completely execute?
}
function isVowel(letter){
  if (typeof letter !== "string") {
    return false;
  } else if (letter.length === 1) {
    letter = letter.toLowerCase();
    return (letter === "a") || (letter === "e") || (letter === "i") || (letter === "o") || (letter === "u");
  } else {
    return false;
  }
}
//were just using slices to hold the number 8 for us to say this is how many we have
// var slices = 8;
// //while will continue to do what it does, while (slices is more than the number 0)
// //like saying if slices are > 0, but instead of doing the code once it does it until this statement isn't true.
// while (slices > 0) {
//   //These are the instructions to do each time it finds slices greater than 0
//   console.log("There's " + slices + " slices left, I'ma have one.");
//   //slices gets redefined with a new value each time this runs.
//   slices = slices -1;
//   //Tells me how many are left after subtracting
//   if (slices > 1) {
//     console.log("Now there are " + slices + " slices left.");
//   } else if (slices === 1) {
//     console.log("There's only 1 slice left.")
//   } else if (slices === 0 ) {
//     console.log("Now we're out of slices.")
//   }
//   //It's going to loop back to the conditional here and go back to see if it's still true.
//   //If it's true it'll continue doing the stuff above until it's now.
// }
// //By the time we make it here slices will = 0, cause we took slices from it.

//Pseudocode (Me saying what I need to do but not coding it yet.)
//Ask the user for input
//get the user input
//declare a user input variable
//store user input in the variable
//declare a variable to store the total (accumulator)
//add cost of new item in the total
//keep storing the new totals
//tell user how to end the program (sentinel value)
//Loop back around and do it all again, over and over, until the user tells stop

//

var priceOfItem = parseFloat(prompt("Enter price of your first item"));
alert("The price of your item was " + priceOfItem);
var totalCost = priceOfItem;
var userInput = "";
// create a sentinel value
while(userInput !== "STOP") {
  userInput = prompt("What is the price of the next item? Enter STOP when you are done.")
  if(userInput === "STOP") {
    //If above is true, it's going to execute this alert, and then go back to the while statement.
    //After going back up to the while statement it's going to check user Input, and see it's true
    //Then end the loop since the userInput does equal "STOP" (instead of do not)
    alert("Final price is." + totalCost);
  } else {
      priceOfItem = parseFloat(userInput);
      totalCost= totalCost + priceOfItem;
      alert("Your total is now " + totalCost.toFixed(2));
    }
}


