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
//  console.log(lettersArray)
//indexing something that is not an index is going to be undefined
// Math.floor(Math.random() * 5) + 1; - number between 1 and 5

//how to use the for loop for index, to pull all the indexes.
// for(var i = 0; i < lettersArray.length; i++) {
//   console.log(lettersArray[i])
// }

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
// function testEachForFalsy(array){
//   var truthyFound;
//   array.forEach(function(element, i) {
//     if (element) {
//       console.log("Truth at index " + i)
//     }
//
//   })
// }
//
// lettersArray.forEach(function(element, i){
//   console.log(element + " " +i)
// })

//stuff below is for editing arrays...
var emptyArrayLong = [];
var lettersArrayLong = ["a","b","c","d"];
var numbersArrayLong = [1,2,3,4,5];
var falseyValuesLong = [null,false,undefined,NaN,0,""];
function listArrayItems(array){
  array.forEach(function(item,index){
    return item + " is at index " + index
  });
}
//useing the unshift and push methods.
//push adds stuff to the end
//unshift adds stuff to the front
numbersArrayLong.unshift(0);
lettersArrayLong.push("e","f","g");
//You can add multiple things by using comma seperated arguements.
//use console.log() statements to see stuff
//To remove elements from the front use shift
numbersArrayLong.shift();
//to remove elements from the end, use pop
numbersArrayLong.pop();
//after both commands it should be 1,2,3,4.
//The pop and shift methods will RETURN, the values removed, and you can save them to a variable
var lettersRemoved = lettersArrayLong.pop();
//The variable above, will have the value "g".

//using the indexOf method (works how it worked with strings to find a character, you can find a
//array element.
var indexOfE = lettersArrayLong.indexOf("e")
//above would return 4 (cause we start from 0 not 1)
//.lastIndexOf starts from the back side of the array.

//you can use the slice method , like the substring method, and can return a value from either one or
// two arguments

var numbersSlice = numbersArrayLong.slice(numbersArrayLong.indexOf(2),4)
console.log(numbersSlice)
//has the values of the numberArrayLong from the index of 2, to the 4th index, so 2 3 4...
var numbersSliceTwo = numbersArrayLong.slice(3)
//only has the value of 3rd index in the numbers array (aka 4)
//console.log(numbersSliceTwo)
//console.log(numbersArrayLong)
//These do not effect the original array just pulls the arrays into a new

//var reversedNumbers = numbersArrayLong.reverse()
//console.log(reversedNumbers)
//console.log(numbersArrayLong)
//If you test the logs above, it reversed the other of the array... (forever)
//arrays are hoisted like functions?
//if you want to change it, you can use a copy function
//using slive with no arguements copys the entire array(without effecting the orginal
function copyOfArray(array){
  return array.slice();
}
var copyArrayNum = copyOfArray(numbersArrayLong)
//using the sort method we cna put stuff in alphabetical order or lowest to higher for numbers
lettersArrayLong.sort();
//If you wanted to sort, and reverse you would not to sort first, before reversing.
//for numbers it orders them in the alphabetical order, so like...
var diffDataTypeArray = [2,52,671,"Hi",true,false] //edit me as needed for testing
//what will diffDataTypeArray.sort() do?

//.join method stuff
//. split method?
//
var csvnames = "josh,bryan,mike,test"
var namesArrayNew = csvnames.split(",")
//takes the csv names, and splits up the names, take the commas out and turn it into an array.
//using the join() method we can join together an array into a string?
var testJoinNames = namesArrayNew.join();
//If we leave it blank it joins on commas if we want something else we can do a character
//.join(" and ")

//Taking 2 arrays and joining them together

var blueGuys = ["blue","green","yellow"]
var redGuys = ["sand","red","gold"]
var allGuys = blueGuys.concat(redGuys)
//Doesn't effect the arrays involved unless we redefine them, unlike the reverse and sort stuff
//What happens if you just use a +? bad stuff it combines the last of the first array
//and the first of the last array, and doesn't seperate them.
//mess around with removeAtIndex(array, index)
function removeAtIndex(array, index){
  var arr1 = array.slice(0, index);
  var arr2 = array.slice(index + 1);
  return arr1.concat(arr2)
}

//splice method?
//Allows we to delete,or replace?
blueGuys.splice(0,1)
//Above says we want to delete the index of 0, and only delete 1 item. This also effects the original
//array doesn't just make a copy.
