"use strict" ;

var dude = " my guy";
//console.log("YOOOOO I'M IN HERE" + dude);
//Single line comment
/* block
* multi
* line
* comment
 */
// var num = parseFloat(prompt("Gimme a number..."));
//console.log("user enter: " + num + "That number plus 17 is: " + (num + 17))
// var canIGo = confirm("Can I go to gym?");
// console.log(canIGo)
//alert("You have a virus");

// var result = (function () {
//   var name = "Barry";
//   return name;
// })();
// var boi = function(y) {
//   return y * y;
// };

// function greeting(name) {
//   alert('Hello ' + name);
// }
//
// function processUserInput(callback) {
//   var name = prompt('Please enter your name.');
//   callback(name);
// }
//
// processUserInput(greeting);


console.log(me("Josh"))

var Testiboi = function me(x) {
  return "Something I did " + x
}
// above doesn't work cause variables aren't hoisted like a regular function declaration would be.
