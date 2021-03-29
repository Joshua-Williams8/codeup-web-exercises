"use strict"

// below is a variable we're using to define a break.
var numberToStopAt = 5;
//long as i is less than 100, while adding 1 to i each time, execute this:
// for (var i = 1; i < 100; i++) {
// //shows the current value of i as we go through the loop
//   console.log('Loop counter is: ' + i);
// // if i is the same value as the variable defined above... execute this
//   if (i === numberToStopAt) {
//     //it's going to log this statement once that condition above is true
//     console.log('We have reached the stopping point: break!');
//     // use the break keyword to exit from the while loop
//     //break gets us out of the loop completely... needed this for the if 1 statement earlier lol
//     break;
//     // nothing after the break will get processed
//     //nothing after a break can be done
//     console.log('You will never see this line.');
//   }
//   //line below shows but not on for the numberToStopAt if statement, but on all others.
//   console.log("but can you see this line?")
// }
//as long as i is less than or equal to 22, increment i each time we go through the loop.
// for (var i = 1; i <= 22; i++) {
// //if i divided by 2 remainder DOES NOT equal 0, execute this:
//   if (i % 2 !== 0) {
//     // number isn't even
//     // odd numbers aren't as cool
//     // skip the rest of the loop and continue with the next iteration
//     //The continue below returns us to the top of the for and goes through the next iteration,
//     //instead of doing the console.log statement on the outside of the if.
//     continue;
//   }
//
//   console.log('Here is a lovely even number: ' + i);
// }

// var stopHere = parseFloat(prompt("Pick an ODD number between 1 and 50."))
// console.log("Number to skip is: " + stopHere)
// for(var i = 1; i <=50; i++) {
//   if (i === stopHere) {
//     break;
//   } else if (i % 2 === 0) {
//     continue;
//   }
//   console.log("Here is an odd number: " + i)
// }
var skipHere
while ((isNaN(skipHere)) || (skipHere % 2 !== 1) || (skipHere > 50) || (skipHere < 1)) {
  var skipHere = parseFloat(prompt("Pick an ODD number between 1 and 50."))
}
console.log("Number to skip is: " + skipHere)
console.log(" ")
for(var i = 1; i <=50; i++) {
  if (i === skipHere) {
    console.log("Yikes I hate " + i)
    continue;
  } else if (i % 2 === 0) {
    continue;
  }
  console.log("Here is an odd number: " + i)
}
