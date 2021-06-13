const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = ['1', '2', '3', '4', '5', '6'];


//old way of doing stuff

// const a = letters[0];
// const b = letters[1];
// console.log(a);
// console.log(b);

//New way
//We get the same output!
// const [a, b] = letters;
// console.log(a);
// console.log(b);
//We take the element we want to destructor, and we take the variable names we want and put them inside the variables we are defining inside the array.
//The position of those elements are where they're going to get pulled out.
//But what if we wanted to skip b and get c?
// const [a,, c] = letters;
// console.log(a,c);
//We add another comma and that says we are skipping the 2nd element.
//But what if we want the rest of the operators in there?

//We use the spread operator!.
// const [a, , c, ...rest] = letters;
// console.log(a, c);
// console.log(rest);

//You can also use the spread operator to combine 2 arrays as I did before?
//The reason this way is more useful is when you are combining OBJECTS, not just arrays.
// const newArray = [...letters, ...numbers];//It's also using for returning more than 1 thing from a function?
// console.log(newArray);

//This is the same as using
// const newCat = letters.concat(numbers);
// console.log(newCat);
// function sumAndMult(x, y) {
//   //return [x+y, x*y];
//   return [x + y, x * y, x / y];
//
// }

//
// console.log(sumAndMult(2,3))

//Now for the new way of doing above function
//by putting the = on the div, that sets it to a default value of No div.

// const [sum,mult,div = 'No div'] = sumAndMult(2,4);
// console.log(sum);
// console.log(mult);
// console.log(div);

const personOne = {
  name: 'Kyle',
  age: 24,
  address: {
    city: "Hood",
    state: "Texas"
  }

}
const personTwo = {
  //name: 'Sally',
  age: 32,
  address: {
    city: "Carson",
    state: "Colorado"
  }

}
//Since we are destructoring an object rather than an array we use curly brackets
// const {name, age} = personTwo;
//
// console.log(name,age); // gives use Sally 32

//What if we want a different variable name? so here's how.
personTwo.favFood = "Watermelon"; //This would need to happen before the variable is made goofy.
// const {name: firstName, age, favFood = "rice"} = personTwo;

// console.log(firstName,age); // gives use Sally 32
//It's taking that name property from the object and putting inside of the firstName variable.

// console.log(favFood); //It's taking that default rice we added in.
//If we give the object a favorite food either by editing the object or doing something like personTwo.favFood (before the variable is made).

// console.log(favFood);

//Using spread operator below
// const {name: firstName,...rest} = personTwo;
// console.log(firstName);
// console.log(rest);
//what if we want something insideof the object?

// const {name: firstName, address: { street }} = personTwo;

// console.log(street); //Theres no street so it's undefined.

// const {name: firstName, address: { city}} = personTwo; //{ city: testName }

//console.log(city);
// console.log(testName);


//Now were going to combine personOne and 2?
// const {name: firstName, address: { city}} = personTwo; //{ city: testName }

const personThree = {...personOne,...personTwo};
//Take everything inside of personOne and put it in an object, but also take everything inside of personTwo and overwrite any properties that have the SAME name so it should be a copy of personTwo?
// console.log(personThree);

//But what if we take some parts out of personTwo? Like the name.
//Now we have all of sally's data with just kyle's name popped in.

//Now what if you want to have a function take in a user and only print out certain parts?

function printUser(user){
  return console.log(`${user.name}, ${user.age}`)
}
printUser(personOne);

function printUserNew({ name, age = 18}){ //The age = 18 makes it so the default age in this case is 18 incase it's not defined.
  return console.log(`${name}, ${age}`);
}// This function knows it is taking in an object, and only use the properties shown, so you can't access any other properties inside this function.

printUserNew(personOne);



