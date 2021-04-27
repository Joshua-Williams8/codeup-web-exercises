"use strict"

var fruits = ["apple","banana","orange","apple","pineapple"]

function allIndexesOf(array,search){
  var resultArray = [];
  if(array.indexOf(search) === -1){
    return resultArray;
  } else {
    array.forEach(function(element,index){
      if (element === search){
        resultArray.push(index);
      }
    });
    return resultArray
  }
}
var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"]
function removeAll(array, remove){
  var resultArray = [];
  if(array.indexOf(remove) === -1){
    return array;
  } else {
    array.forEach(function(element,index){
      console.log(element,index);
      console.log(element === remove);
      if (element !== remove){
        //splicing was skipping over it if the thing showed up twice in row, cause of the counting, and
        //subtracting of entries at the same time.
        resultArray.push(element);
      }
    });
    return resultArray
  }
}

function getRandomNumber(min,max) {
  return Math.floor(Math.random() * max) + min;
}
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
function coinFlip() {
  return Math.floor(Math.random() * 1) + 0;
}
function twoDice() {
  return rollDice() + rollDice();
}
function twentySidedDie() {
  return Math.floor(Math.random() * 20) + 1;
}
function tetrahedron() {
  return Math.floor(Math.random() * 4) + 1;
}
function twelveSidedDie() {
  return Math.floor(Math.random() * 12) + 1;
}
function listOfRolls(rolls){
  var rollsArray = []
  for(var i = 1; i <= rolls; i++){
    var d = rollDice();
    rollsArray.push(d)
  }
  return rollsArray
}
//the function you inpuit into another one to get a DIFFERENT random number is
// diceRoll (without the ()) so it runs multiple times for different numbers.
function listOfRollsFromDieFunc(numOfRolls,diceFunc){
  var rollsArray = []
  for(var i = 1; i <= numOfRolls; i++){
    var d = diceFunc();
    rollsArray.push(d)
  }
  return rollsArray
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
function secondToArray(array){
  return array[array.length - 2];
}
function restArray(array){
  return array.shift();
}
function getLongestString(array){
  //for some reason my foreach loop version WOULD NOT WORK.
  for(var index = 0; index < array.length; index = index + 1) {
    //console.log(array[index],index)
    //console.log(largestString,largestIndex)
    if(index === 0){
      var largestString = array[index];
      var largestIndex = index;
      //console.log(largestString,largestIndex)
    } else if (array[index].length > largestString.length){
      largestString = array[index];
      largestIndex = index;
      //console.log(largestString,largestIndex)
    } else if (array[index].length < largestString.length){
      continue
    }
  }
  return largestString;
}
function getShortestString(array){
  //for some reason my foreach loop version WOULD NOT WORK.
  for(var index = 0; index < array.length; index = index + 1) {
    //console.log(array[index],index)
    //console.log(largestString,largestIndex)
    if(index === 0){
      var shortestString = array[index];
      var shortestIndex = index;
      //console.log(largestString,largestIndex)
    } else if (array[index].length < shortestString.length){
      shortestString = array[index];
      shortestIndex = index;
      //console.log(largestString,largestIndex)
    } else if (array[index].length > shortestString.length){
      continue
    }
  }
  return shortestString;
}
function addTwoArrays(firstArray,secArray){
  return firstArray.concat(secArray);
}
function getUniqueValues(array){
  //I'm going to use 2 foreach loops so as the loop goes through each element,
  //It will allow me to compare each and every element to each and other element.
  array.forEach(function(elementOne,indexOne){
    array.forEach(function (elementTwo,indexTwo){
      //Test log statements to make sure it's going to let me compare values
      //console.log(elementOne, elementTwo)
      //console.log(indexOne,indexTwo)
      //This is if I'm at the SAME INDEX, please don't do anything
      if (indexOne === indexTwo){
        //console.log("Don't do anything")
        //This is if the elements values are the same, then I want to splice them, from the first index
        //so they don't remove later indexes and cause issues, I have to use indexOne!
      } else if (elementOne === elementTwo) {
        array.splice(indexOne,1);
      }
    })
  })
  //return on the OUTSIDE of both loops.
  return array
}
function reverseArray(array){
  return array.reverse();
}

function getRandomQuote(){
  var quotesArray = ["bada bing","You got bamboozled","Hi there","What ever"]
  return quotesArray[Math.floor(Math.random() * quotesArray.length - 1) + 1];
}

function getIndexesOf(char,string){
  var stringArray = string.split("");
  var resultArray = []
  stringArray.forEach(function(element,index){
    if (char === element){
      console.log(index, element)
      console.log(char)
      resultArray.push(index);
    }
  })
  return resultArray
}

//We did removeAll already. it's up there
function firstTenFibonacciNumbers() {
  var fibOdd = 1
  var fibEven = 1
  var resultArray = [1,1]
  for(var i = 3; i <= 10; i++){
    if(i % 2 === 1){
      fibOdd = fibOdd + fibEven
      resultArray.push(fibOdd)
    } else if (i % 2 === 0){
      fibEven = fibOdd + fibEven
      resultArray.push(fibEven)
    }
  }
  return resultArray
}
function getNFibonacciNumbers(n) {
  var fibOdd = 1
  var fibEven = 1
  var resultArray = [1,1]
  if (n === 1){
    return [1]
  }else {
    for (var i = 3; i <= n; i++) {
      if (i % 2 === 1) {
        fibOdd = fibOdd + fibEven;
        resultArray.push(fibOdd);
      } else if (i % 2 === 0) {
        fibEven = fibOdd + fibEven;
        resultArray.push(fibEven);
      }
    }
  }
  return resultArray
}
function firstToLast(array){
  var first = array[0];
  array.shift();
  array.push(first);
  return array
}
function swapPositionIndex(array,swapIndex1,swapIndex2){
  var swapOneValue = array[swapIndex1]
  var swapTwoValue = array[swapIndex2]
  array.splice(swapIndex1,1,swapTwoValue)
  array.splice(swapIndex2,1,swapOneValue)
return array
}
//below I'm nesting arrays inside of array
function zip(arrayOne,arrayTwo){
  var resultArrays = [];
  arrayOne.forEach(function(elementOne,indexOne){
    arrayTwo.forEach(function(elementTwo,indexTwo){
      if (indexOne === indexTwo){
        resultArrays.push([elementOne,elementTwo]);
      }
    })
  })
  return resultArrays
}

