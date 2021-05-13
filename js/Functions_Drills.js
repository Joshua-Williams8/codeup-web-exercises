"use strict"
//Add 2 numbers together, but only adds NUMBERS, anything else will return NaN
function add(x,y) {
  if (isNaN((parseFloat(x) + parseFloat(y))) === true ) {
    return NaN
  } else {
    return parseFloat(x) + parseFloat(y)
  }
}
function concat(x,y) {
  return x.toString() + y.toString()
}

//Check to see if a number is odd.
function isOdd(number){
  return parseFloat(number) % 2 === 1 || parseFloat(number) % 2 === -1;
}
//Check to see if a number is even.
function isEven(number) {
  return parseFloat(number) % 2 === 0;
}
//Below are the same 2 functions above but they return string statements.
function isOdd(number) {
  if( parseFloat(number) % 2 === 1 || parseFloat(number) % 2 === -1) {
    return number + " is odd."
  }
}
//Check to see if a number is even.
function isEven(number) {
  if (parseFloat(number) % 2 === 0) {
    return number + " is even."
  }
}

function isNegative(x){
  return x < 0
}

function isPositive(x){
  return x > 0
}

//returns input as provided
function identity(input){
  return input;
}
function isFive(num){
  return num === 5;
}
function addFive(num){
  return num + 5;
}
function isMultipleOfFive(num){
  return num % 5 === 0;
}
function isThree(num){
  return num === 3;
}
function isMultipleOfThree(num){
  return num % 3 === 0;
}
function ismultipleOfThreeAndFive(num){
  return (num % 3 ===0) && (num % 5 === 0);
}
function isMultipleOf(target, n){
  return target % n === 0;
}
function isTrue(boolean){
  return boolean === true;
}
function isFalse(boolean){
  return boolean === false;
}
function isTruthy(input){
  return input == true;
}
function isFalsy(input){
  return input  == false;
}
function isVowel(letter){
  if (typeof letter !== "string") {
    return false
  } else if (letter.length === 1) {
    letter = letter.toLowerCase();
    return (letter === "a") || (letter === "e") || (letter === "i") || (letter === "o") || (letter === "u");
  } else {
    return false
  }
}
function isConsonant(letter){
  letter = letter.toLowerCase();
  if (isNaN(parseFloat(letter))) {
    if ( letter === "a") {
      return false;
    } else if ( letter === "e") {
      return false;
    } else if ( letter === "i") {
      return false;
    } else if ( letter === "o") {
      return false;
    } else if ( letter === "u") {
      return false;
    } else {
      return true;
    }
  } else {
    return "This is not a letter dude.";
  }
}

function isCapital(letter){
  return letter.toUpperCase() === letter;
}

function isLowerCase(letter){
  if (letter === ""){
    return false;
  } else if (typeof letter === "string"){
  return letter === letter.toLowerCase();
} else {
  return false;
  }
}

function hasLowerCase(str){
  return str.toUpperCase() !== str;
}

// function hasLowerCase(str) {
//   return (/[a-z]/.test(str));
// }


function isSpace(char) {
  return char === " ";
}

function isZero(num) {
  return num === 0;
}

function notZero(num) {
  return num !== 0;
}

function double(x){
  return x * 2
}

function triple(x){
  return x * 3
}

function quadruple(x){
  return x * 4
}

function half(x){
  return x / 2
}

function subtract(x,y){
  return x - y
}

function multiply(x,y){
  return x * y
}

function divide(x,y){
  return x / y
}

function remainder(x,y){
  return x % y
}

function modulo(x,y){
  return x % y
}

function cube(x){
  return x ** 3
}
function square(x){
  return x ** 2
}
function squareRoot(x){
  return x ** .5
}

function cubeRoot(x){
  return Math.cbrt(x);
}

function invertSign(num){
  num = parseFloat(num);
  if (isNaN(num)) {
    return false;
  } else {
    return num * -1;
  }
}
function degreesToRadians(degrees){
  return degrees * (Math.PI /180)
}

function radiansToDegrees(radians){
  return radians * (180/Math.PI)
}
function isBlank(input){
  return (input.split(" ").join("") === "")
}

function trim(string){
  return string.trim();
}
function areEqual(x,y){
  return x==y
}
function areIdentical(x,y){
  return x===y
}
function not(input){
  return !input
}
function notNot(input){
  return !!input
}
function and(x,y){
  return x && y
}
function or(x,y){
  return x || y
}

function reverseString(string){
  //below takes the string and splits each INDIVIDUAL CHARACTER into array elements
  var stringArray = string.split("");
  //takes the array from above and reverses it
  var reverseStringArray = stringArray.reverse();
  //below we return the a
  return reverseStringArray.join("")
  //we can also shorten this to string.split("").reverse().join("")
}
function absoluteValue(x){
  if(x < 0) {
    return -x
  } else {
    return x
  }
}
function rollDice(sides){
  return Math.floor(Math.random() * sides) + 1;
}
function returnTwo(){
  return 2;
}
function getRandomNumber(min,max){
  return Math.floor(Math.random() * max) + min;
}
function firstString(string){
  return string.charAt(0);
}
function lastString(string){
  return string.charAt(string.length - 1);
}
function restString(string){
  var stringArray = string.split("");
  stringArray.shift();//I could do .splice(0,1)
  console.log(stringArray)
  return stringArray.join("");
}
// function isNumeric(input){
//   return typeof input === "number"
// }

function isNumeric(input){
  input = input * 1
  return !isNaN(input)
}

function countString(string){
  return string.length;
}
function sumOfSquares(x,y){
  return add(square(x),(square(y)))
}
function doMath(operatorString,a,b){
  var aOB = a + operatorString + b
  return eval(aOB)
}

function testBoo(num) {
  switch (num) {
    case (num == parseFloat(num)) :
      return true
      break;
    case 1 :
      return true
    break;
    default:
      return false;
  }
}

//Something important for doing test for NaN, you need to expect isNaN to be true, cause NaN cannot == NaN
// it('"banana","split" input should return NaN',function() {
//     expect(Number.isNaN(add("banana","split"))).toBe(true);
//   });
//Refer to iterating.js for some other review for array functions if needed.
function firstArray(array){
  return array[0]
}
function secondArray(array){
  return array[1]
}
function lastArray(array){
  return array[array.length - 1];
}

//
//This is for 3, the 5 is the highest we go, the 1 is the lowest or first number...
var randomNumTest = Math.floor(Math.random() * 5) + 1;



function getHighestNumber(x,y,z){
  x = parseFloat(x);
  y = parseFloat(y);
  z = parseFloat(z);
  if (isNaN(x) || isNaN(y) || isNaN(z)){
    return false;
  } else if ((x === y) && (x === z)) {
    return x;
  } else if (((y > x) && (y > z)) || ((y === z) && (y > x)) || ((y === x) && (y > z))) {
    return y;
  } else if (((z > x) && (z > y)) || ((z === x) && (z > y)) || ((z === y) && (z > x))) {
    return z;
  } else if (((x > y) && (x > z)) || ((x === y) && (x > z)) || ((x === y) && (x > z))) {
    return x;
  }
}
function getHighestNumberStrToArray(x,y,z) {
  x = parseFloat(x);
  y = parseFloat(y);
  z = parseFloat(z);
  if (isNaN(x) || isNaN(y) || isNaN(z)){
    return false;
  } else {
    //Math.max(x,y,z) is also an option.
    var numArray = [x,y,z];
    numArray = numArray.sort();
    return numArray[2]
  }
}

function bitwiseAND(n1, n2) {
  //First we want to convert both of the input numbers to binary, using toString(2)
  var n1string = n1.toString(2);
  var n2string = n2.toString(2);
  //Next we want to declare both of the Array Strings and our result Array
  var n1stringArr = n1string.split("");
  //console.log(n1stringArr)
  var n2stringArr = n2string.split("");
  //console.log(n2stringArr)
  var resultArr = [];
  //The stuff below if to make the arrays the same length depending on which one is longer.
  var bitLength;
  if (n1stringArr.length > n2stringArr.length) {
    bitLength = n1stringArr.length;
  } else {
    bitLength = n2stringArr.length;
  }
  //console.log(bitLength)
  //console.log(n1stringArr)
  while(n1stringArr.length < bitLength){
    //We are using the string version of 0 to avoid any unexpected parsing issues for the future.
    n1stringArr.unshift("0")
  }
  //console.log(parseInt(n1stringArr.join(""), 2))
  //Below using regExp (regular Expression) I need help understanding this please.
  //console.log(n1stringArr)
  //console.log(n2stringArr)
  while(n2stringArr.length < bitLength){
    n2stringArr.unshift("0")
  }
  //console.log(n2stringArr)
  //Below we are setting up for each loops
  n1stringArr.forEach(function(bitn1,indexn1 ){
    n2stringArr.forEach(function(bitn2,indexn2){
      //For our if else statements we need the bit, and the index to match, for us to push to the result, but if that's not the case we still need to push a zero
      //Since this is an AND function we want matching bits only!
     if ((bitn1 === bitn2) && (indexn1 === indexn2)){
       // console.log(resultArr, "Before if", indexn1,indexn2)
       //It doesn't matter if we push 1 or 0 because we will get a the value that's the same for the AND function
       resultArr.push(bitn1)
       //console.log(resultArr, "After if", indexn1,indexn2)
       //For this if statement were saying only push a 0 if the indexs are at the same point in their respective arrays, (This is also why we set the match bits to 8) so we don't have any length problems.
     } else if (indexn1 === indexn2 && bitn1 !== bitn2) {
       //console.log(resultArr, "before else", indexn1,indexn2)
       //Pushing a zero if the bits don't match because if they don't then the bit is turned off, We only want to send forward ON bits or 1s.
       resultArr.push("0")
       //console.log(resultArr, "After else", indexn1,indexn2)
     }
    });
  });
  //After finishing the loops we want to reconvert our array into a string, and then into a number. (not sure what the use of this is yet but it's good practice)
  //console.log(resultArr)
  var result = parseInt(resultArr.join(""),2)
  return result
}
//Show these tomorrow and ASK ABOUT THE REGULAR EXPRESSION STUFF PLEASE.
function bitwiseOR(n1, n2) {
  var nstring1 = n1.toString(2);
  var nstring2 = n2.toString(2);
//First we want to convert both of the input numbers to binary, using toString(2)
  var n1string = n1.toString(2);
  var n2string = n2.toString(2);
  //Next we want to declare both of the Array Strings and our result Array
  var n1stringArr = n1string.split("");
  //console.log(n1stringArr)
  var n2stringArr = n2string.split("");
  //console.log(n2stringArr)
  var resultArr = []
  //The stuff below if to make the arrays the same length depending on which one is longer.
  var bitLength;
  if (n1stringArr.length > n2stringArr.length) {
    bitLength = n1stringArr.length;
  } else {
    bitLength = n2stringArr.length;
  }
  //console.log(bitLength)
  //console.log(n1stringArr)
  while(n1stringArr.length < bitLength){
    //We are using the string version of 0 to avoid any unexpected parsing issues for the future.
    n1stringArr.unshift("0")
  }
  //console.log(parseInt(n1stringArr.join(""), 2))
  //Below using regExp (regular Expression) I need help understanding this please.
  //console.log(n1stringArr)
  //console.log(n2stringArr)
  while(n2stringArr.length < bitLength){
    n2stringArr.unshift("0")
  }
  //console.log(n2stringArr)
  //Below we are seting up for each loops
  n1stringArr.forEach(function(bitn1,indexn1 ){
    n2stringArr.forEach(function(bitn2,indexn2){
      //For our if else statements we need the bit, and the index to match, for us to push to the result, but if that's not the case we still need to push a zero
      //Since this is an OR function we want ON bits only!
      //Keep in mind were using "1" instead of 1 because we want to make sure our array contains strings
      if (((bitn1 === "1") || (bitn2 === "1")) && (indexn1 === indexn2)){
         console.log(resultArr, "Before if", indexn1,indexn2)
        //We only want to push the ones on an OR function
        resultArr.push("1")
        //console.log(resultArr, "After if", indexn1,indexn2)
        //For this if statement were saying only push a 0 if the indexs are at the same point in their respective arrays, (This is also why we set the match bits to 8) so we don't have any length problems.
      } else if (indexn1 === indexn2 && bitn1 !== bitn2) {
        //console.log(resultArr, "before else", indexn1,indexn2)
        //Pushing a zero if the bits don't match because if they don't then the bit is turned off, We only want to send forward ON bits or 1s.
        resultArr.push("0")
        console.log(resultArr, "After else", indexn1,indexn2)
      }
    });
  });
  //After finishing the loops we want to reconvert our array into a string, and then into a number. (not sure what the use of this is yet but it's good practice)
  //console.log(resultArr)
  var result = parseInt(resultArr.join(""),2)
  return result
}

function bitwiseXOR(n1, n2) {
  var nstring1 = n1.toString(2);
  var nstring2 = n2.toString(2);
//First we want to convert both of the input numbers to binary, using toString(2)
  var n1string = n1.toString(2);
  var n2string = n2.toString(2);
  //Next we want to declare both of the Array Strings and our result Array
  var n1stringArr = n1string.split("");
  //console.log(n1stringArr)
  var n2stringArr = n2string.split("");
  //console.log(n2stringArr)
  var resultArr = []
  //The stuff below if to make the arrays the same length depending on which one is longer.
  var bitLength;
  if (n1stringArr.length > n2stringArr.length) {
    bitLength = n1stringArr.length;
  } else {
    bitLength = n2stringArr.length;
  }
  //console.log(bitLength)
  //console.log(n1stringArr)
  while(n1stringArr.length < bitLength){
    //We are using the string version of 0 to avoid any unexpected parsing issues for the future.
    n1stringArr.unshift("0")
  }
  //console.log(parseInt(n1stringArr.join(""), 2))
  //Below using regExp (regular Expression) I need help understanding this please.
  //console.log(n1stringArr)
  //console.log(n2stringArr)
  while(n2stringArr.length < bitLength){
    n2stringArr.unshift("0")
  }
  //console.log(n2stringArr)
  //Below we are seting up for each loops
  n1stringArr.forEach(function(bitn1,indexn1 ){
    n2stringArr.forEach(function(bitn2,indexn2){
      //For our if else statements we need the bit, and the index to match, for us to push to the result, but if that's not the case we still need to push a zero
      //Since this is an XOR function we want the bits that are on in ONE of the numbers.
      //Keep in mind were using "1" instead of 1 because we want to make sure our array contains strings
      if ((bitn1 !== bitn2) && (indexn1 === indexn2)){
        console.log(resultArr, "Before if", indexn1,indexn2)
        //We only want to push the ones on an XOR function
        resultArr.push("1")
        //console.log(resultArr, "After if", indexn1,indexn2)
        //For this if statement were saying only push a 0 if the indexs are at the same point in their respective arrays, (This is also why we set the match bits to 8) so we don't have any length problems.
        // for anXOR we want to make sure we return 0s if the bits match.
      } else if (indexn1 === indexn2 && bitn1 === bitn2) {
        //console.log(resultArr, "before else", indexn1,indexn2)
        //Pushing a zero if the bits don't match because if they don't then the bit is turned off, We only want to send forward ON bits or 1s.
        resultArr.push("0")
        console.log(resultArr, "After else", indexn1,indexn2)
      }
    });
  });
  //After finishing the loops we want to reconvert our array into a string, and then into a number. (not sure what the use of this is yet but it's good practice)
  console.log(resultArr)
  var result = parseInt(resultArr.join(""),2)
  return result
}
// regular expression stuff below
// function hasLowerCase(str) {
//   return (/[a-z]/.test(str));
// }



function removeFromArray(array,remove){
  var resultArray = []
  array.forEach(function (element,index){
    if (element !== remove){
      resultArray.push(element);
    }
  });
  return resultArray;
}

function average(array){
  var sum = 0;
  array.forEach(function (element,index){
    sum = sum + element;
  });
  sum = sum / array.length;
  return sum
}

function countEvens(array){
  //Check to see if a number is odd.
  function isEven(number) {
    return parseFloat(number) % 2 === 0;
  }
  var result = 0
  array.forEach(function (element,index){
    if(isEven(element)){
      result += 1;
    }
  });
  return result
}


function countVowels(string){
  var count = 0;
  function isVowel(letter){
    if (typeof letter !== "string") {
      return false
    } else if (letter.length === 1) {
      letter = letter.toLowerCase();
      return (letter === "a") || (letter === "e") || (letter === "i") || (letter === "o") || (letter === "u");
    } else {
      return false
    }
  }
  var stringArray = string.split("");
  stringArray.forEach(function (element,index){
    if (isVowel(element)){
      count++
    }
  });
  return count;
}




