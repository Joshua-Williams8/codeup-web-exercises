"use strict"
//Check to see if a number is odd.
function isOdd(number){
  return number % 2 === 1 || number % 2 === -1
}
//Check to see if a number is even.
function isEven(number){
  return number % 2 === 0
}
//returns input as provided
function identity(input){
  return input
}
function isFive(num){
  return num === 5
}
function addFive(num){
  return num + 5
}
function isMultipleOfFive(num){
  return num % 5 === 0
}
function isThree(num){
  return num === 3
}
function isMultipleOfThree(num){
  return num % 3 === 0
}
function ismultipleOfThreeAndFive(num){
  return (num % 3 ===0) && (num % 5 === 0)
}
function isMultipleOf(target, n){
  return target % n === 0
}
function isTrue(boolean){
  return boolean === true
}
function isFalse(boolean){
  return boolean === false
}
function isTruthy(input){
  return input == true
}
function isFalsy(input){
  return input  == false
}
function isVowel(letter){
  letter = letter.toLowerCase()
  return ( letter === "a") || ( letter === "e") || ( letter === "i") ||( letter === "o") || ( letter === "u")
}
function isVowel(letter){
  letter = letter.toLowerCase()
  var stuff = ( letter !== "a") || ( letter !== "e") || ( letter !== "i") ||( letter !== "o") || ( letter !== "u")
}
