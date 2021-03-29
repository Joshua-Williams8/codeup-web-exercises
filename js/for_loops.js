"use strict"
//1 was creating this file, 2 is below. COMPLETE
function showMultiplicationTable(num) {
  for(var tab = 1; tab <=10; tab++){
    console.log(num + " times " + tab +" is: = " + (num * tab));
  }
}
//3 is COMPLETE
//This is for 3, the 5 is the highest we go, the 1 is the lowest or first number...
var randomNumTest = Math.floor(Math.random() * 5) + 1;
//
// for(var i = 1; i <= 10; i++) {
//   var randomNumReal = Math.floor(Math.random() * 200) + 20;
//   if (isEven(randomNumReal)) {
//     console.log(randomNumReal + " is even.")
//   } else if (isOdd(randomNumReal)) {
//     console.log(randomNumReal + " is odd.")
//   }
//   console.log("The current i we are on is: " + i)
// }
//functions below are just to clean up the look of the function above.
function isOdd(number){
  return parseFloat(number) % 2 === 1 || parseFloat(number) % 2 === -1;
}
//Check to see if a number is even.
function isEven(number) {
  return parseFloat(number) % 2 === 0;
}

//4 COMPLETED i is what we multiply by? 4 is hard..? I did it on my own.
// for(var i = 1; i < 10; i++) {
//   //I want the string.length to be equal to the i...
//   var iString = i.toString()
//   //console.log(iString) //"3"
//   //console.log(i) //3
//   if (i === 1) {
//     //console.log("This is 1") - longer version of logic
//   } else {
//     //var ii = i // ii = 3
//     while (iString.length < i) { // 1 < 3
//       //console.log(ii) // 3
//       //iString = concat(ii, i) //"33" - longer version logic
//       //ii = iString - longer logic stuff
//       iString = concat(iString, i) //"33"
//       //console.log(iString)
//     }
//     //console.log(iString)
//   }
//   console.log(iString)
// }
//function below is for one above.
function concat(x,y){
  x = x.toString();
  y = y.toString();
  return x + y;
}
//BELOW FUNCTIONS ARE FOR FUNCTION ABOVE.
//Check to see if a number is odd.


//for loops 5 COMPLETE
// for(var fi = 0; fi < 20; fi++){
//   var minusFive = 5 * fi
//   var ugh = 100 - minusFive
//   console.log(ugh)
// }
