"use strict";
// //Declaring a variable to hold 10
// var test = 10
// //while 10 is greater than or equal to 0 execute the next lines
// while(test >= 0){
//   //log the value of test currently
//   console.log(test)
//   //take test and subtract 1 from it and redefined test as that.
//   test = test -1
//   //it will repeat lines above, until the condition is false.
// }


//Declaring a variable to hold 1
var test = 1
// //while test is lesser than or equal to 65536 execute the next lines
// while(test <= 65536 ){
//   //log the value of test currently
//   console.log(test)
//   //take test and multiply it by 2 from it and redefined test as that.
//   test = test * 2
//   //it will repeat lines above, until the condition is false.
// }

//same as while, except it does the stuff first, then checks the condition, before looping through again.
// do{
//   console.log(test);
//   test = test * 2;
// } while (test <= 65536);
/*

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;

do {
  //Below just gives a random number between 1 and 5, (it's the amount someone is buying)
  var soldCones = Math.floor(Math.random() * 5) + 1;
  //if statement for long all the amount I have left is greater than the amount sold do this.
  if (allCones > soldCones) {
    //redefining allCones to take away soldCones values each time.
    allCones = allCones - soldCones;
    //Logs to show what the cones values are.
    console.log("I sold " + soldCones + " cones.");
    console.log("I need to sell " + allCones + " more cones.");
    //if the if statement above becomes false do this:
    //I actually don't need the if... but I'm keeping it, cause it works as intended.
  } else if (allCones <= soldCones){
    //logs below to explain what's going on.
    console.log("I cannot sell you " + soldCones + " cones, because I only have " + allCones + ".");
    console.log("I'm almost out of cones, I can sell you " + allCones );
    //I'm redefining soldCones to the last remaining AllCones.
    soldCones = allCones;
    //allCones is being defined with the remaining soldCones being taken from it's current values.
    allCones = allCones - soldCones;
    //log statements to show I'm selling the rest of my cones.
    console.log("Here are my last " + soldCones + " cones.")
    console.log("I have " + allCones + " left, I sold them all.")
    //I wrote my code in a way where all the remaining values should make since, so
    //Instead of doing allCones = allCones - allCones or 0, I wanted soldCones to reflect what
    //actually at the time was being sold.
  }
} while (allCones > 0);
// command shift / to uncomment a block comment. or command shift for a line comment
*/

//example while loop we are going ot turn into a for loop
var count = 0;
while(count < 20 ){
  count = count + 1;
  console.log(count);
  //count = count + 1;
  //for the comment above notice the difference output for infront or behind...
}

// for(var count = 0; count <= 20; count = count+1){
//   console.log(count)
//
// }


