"use strict"
//Check to see if a number is odd.
function isOdd(number){
  return number % 2 === 1 || number % 2 === -1;
}
//Check to see if a number is even.
function isEven(number) {
  return parseFloat(number) % 2 === 0;
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

function hasLowerCase(word){
if (isLowerCase(word.charAt(0))) {
    return true;
  } else if (isLowerCase(word.charAt(1))) {
    return true;
  } else if (isLowerCase(word.charAt(2))) {
    return true;
  } else if (isLowerCase(word.charAt(3))) {
    return true;
  } else if (isLowerCase(word.charAt(4))) {
    return true;
  } else if (isLowerCase(word.charAt(5))) {
    return true;
  // } else if (isLowerCase(word.charAt(word.length() - 1))) {
  //   return true;
  } else {
    return false;
  }
}
// var dude = "DUDEASFAF";
// var mood = "moODqr";
// var cap = "cap";
// console.log(isLowerCase(dude.charAt(4)));
// console.log(isLowerCase(mood.charAt(4)));
// console.log(isLowerCase(cap.charAt(4)));

function isSpace(char) {
  return char === " ";
}

function isZero(num) {
  return char === 0;
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

function squareRoot(x){
  return x ** .5
}

function cubeRoot(x){
  return Math.cbrt(x)
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
