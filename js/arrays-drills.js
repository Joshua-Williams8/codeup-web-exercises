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
//To add to an array you have to type it out as if you were defining it, but you use the .push(stuff) method
//or you can use the unshift for the beginning
//To remove you would use the pop(end) or shift(front)
//To remove or add from middle use .splice method. books.splice(index to start deleteing from, how many to delete, what to replace with)
//You can also use .splice just to add to the middle if you pust .splice(#,0,What you want to add.)
var booksTest = [];
function createBookTest(titleString,firstNameString,lastNameString){
  booksTest.push({title: titleString,author:{firstName: firstNameString, lastName: lastNameString},},);
}
createBookTest("Grey Book","Will","Smith")
createBookTest("Little Blue Diving Hood.","Leo","Dragovich")
//to call to an object array you do, books[1].author.... yea.
//look at array objects.js to get a better idea of array objects, with properties
var shoppers = [
  {name: 'Cameron', amount: 180},
  {name: 'Ryan', amount: 250},
  {name: 'George', amount: 320},
];
//You need to have the object upfront as usual, the next thing after shopper, would be what iteraction were on.
shoppers.forEach(function(shopper) {
  //You pull properties you need to use the thing defined above, with a .property in this case name...
  console.log(shopper.name + " shopper?");
  console.log(shopper.amount + " cost?");
  if (shopper.amount < 200){
    return console.log(shopper.name + " your total for today is $" + shopper.amount.toFixed(2) + " unfortunately you do not qualify for the 12% discount, because you need to spend at least $200.");
  } else {
    return console.log(shopper.name + " your total for today before applying discount is $" + shopper.amount.toFixed(2) + " after applying our 12% discount, is it: $" + (shopper.amount / 0.88).toFixed(2));
  }
});
