function add(x,y) {
  if (isNaN((parseFloat(x) + parseFloat(y))) === true ) {
    return NaN
  } else {
    return parseFloat(x) + parseFloat(y)
  }
}

//Check to see if a number is odd.
function isOdd(number){
  return parseFloat(number) % 2 === 1 || parseFloat(number) % 2 === -1;
}
//Check to see if a number is even.
function isEven(number) {
  return parseFloat(number) % 2 === 0;
}

function isNegative(x){
  return x < 0
}

function isPositive(x){
  return x > 0
}

function isMultipleOf(num,mult){
  return num % mult === 0;
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

function trim(string){
  return string.trim();
}

function areEqual(x,y){
  return x==y
}

function absoluteValue(x){
  if(x < 0) {
    return -x
  } else {
    return x
  }
}

function getRandomNumber(min,max){
  return Math.floor(Math.random() * max) + min;
}

function doMath(operatorString,a,b){
  var aOB = a + operatorString + b
  return eval(aOB)
}

