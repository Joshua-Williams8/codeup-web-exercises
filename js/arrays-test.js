"use strict"

//declaring an Array is done by using the square brackets []
//example below
var emptyArray = [];
var lettersArray = ["a","b","c"];
var numbersArray = [1,2,3,4,];
var falseyValues = [null,false,undefined,NaN,0,""];
//stuff you can do with arrays
// console.log(lettersArray.length)
// console.log(lettersArray)
// console.log([].length)
// console.log([1,2,3].length)
//you can also do stuff to the inside
//array.length - 1 would be the index of the last thing.
 console.log(lettersArray)
//indexing something that is not an index is going to be undefined
// Math.floor(Math.random() * 5) + 1; - number between 1 and 5

//how to use the for loop for index, to pull all the indexes.
for(var i = 0; i < lettersArray.length; i++) {
  console.log(lettersArray[i])
}

//don't forget about array.indexOf("a") would return where the string a is at in the index
console.log(lettersArray.indexOf("b"))
//a little extra fun
//stuff dode
var trueOrFalse = [0,1,true,false,undefined,"",null,"stingy boi",50,NaN]
function testAllForTruthy(array){


  for(var j = 0; j < array.length; j++) {
    //we see if the value at that index is true...
    if (array[j]) {
      console.log("truth value at index " + j)
    } else if(!array[j]) {
      console.log("false value at index " + j)
    } else {
      console.log("this is not true nor false at index" + j)
    }
  }
}
//foreach method?
//we can hit each element inside of an array
function testEachForFalsy(array){
  var truthyFound;
  array.forEach(function(element, i) {
    if (element) {
      console.log("Truth at index " + i)
    }

  })
}

lettersArray.forEach(function(element, i){
  console.log(element + " " +i)
})
