"use strict"

var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
console.log(fruits.lastIndexOf("apple"))
function allIndexesOf(array, string){
  var resultArray = []
array.forEach(function (element, index){
  if (element === string) {
    resultArray.push(index)
  }
})
  return resultArray
}
