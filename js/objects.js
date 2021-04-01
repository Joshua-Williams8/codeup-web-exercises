//(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
  var person = {
      firstName: "Joshua",
      lastName: "Williams",
      //part 2
      sayHello: function() {
        return "Hello from " + this.firstName + " " + this.lastName + "!"
      }
    };
  console.log(person.firstName, person.lastName)
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
console.log(person.sayHello())
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320},
    ];
    //You need to have the object upfront as usual, the next thing after shopper, would be what iteraction were on.
    shoppers.forEach(function(shopper) {
      //You pull properties you need to use the thing defined above, with a .property in this case name...
      //console.log(shopper.name + " shopper?");
      //console.log(shopper.amount + " cost?");
      if (shopper.amount < 200){
        return console.log(shopper.name + " your total for today is $" + shopper.amount.toFixed(2) + " unfortunately you do not qualify for the 12% discount, because you need to spend at least $200.");
      } else {
        return console.log(shopper.name + " your total for today before applying discount is $" + shopper.amount.toFixed(2) + " after applying our 12% discount, is it: $" + (shopper.amount / 0.88).toFixed(2));
      }
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
var books = [
    {
      title: "Grey Book",
      author: {
        firstName: "Will",
        lastName: "Smith",
        },
    },
    {
      title: "Little blue diving Hood",
      author: {
        firstName: "Leo",
        lastName: "Dragovich",
      },
    },
    {
      title: "Too save a Blue Jay",
      author: {
        firstName: "Donna",
        lastName: "Brown",
        },
    },
    {
      title: "Run Away",
      author: {
        firstName: "Cleo",
        lastName: "Patra",
      },
    },
    {
      title: "Taken Socks",
      author: {
        firstName: "Dryer",
        lastName: "Washer",
      },
    },
];
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    console.log(books)
books.forEach(function(book,index){
  console.log("---");
  console.log("Book # " + (index + 1));
  console.log("Title: " + book.title);
  console.log("Author: " + book.author.firstName, book.author.lastName)
});
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
function createBook(titleString,firstNameString,lastNameString){
  books.push({title: titleString,author:{firstName: firstNameString, lastName: lastNameString},},);
    }
//To add to an array you have to type it out as if you were defining it, but you use the .push(stuff) method
//or you can use the unshift for the beginning
//To remove you would use the pop(end) or shift(front)
//To remove or add from middle use .splice method. books.splice(index to start deleteing from, how many to delete, what to replace with)
//You can also use .splice just to add to the middle if you use .splice(#,0,What you want to add.)
var booksTest = [];
function createBookTest(titleString,firstNameString,lastNameString){
  booksTest.push({title: titleString,author:{firstName: firstNameString, lastName: lastNameString},},);
}
createBookTest("Grey Book","Will","Smith")
createBookTest("Little Blue Diving Hood.","Leo","Dragovich")
//to call to an object array you do, books[1].author.... yea.
function showBookInfo(bookTitle){
  console.log(books.indexOf(bookTitle))
}

//})();
