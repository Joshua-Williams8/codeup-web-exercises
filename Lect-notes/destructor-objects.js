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
const [a, , c, ...rest] = letters;
console.log(a, c);
console.log(rest);

//You can also use the spread operator to combine 2 arrays as I did before?
//The reason this way is more useful is when you are combining OBJECTS, not just arrays.
const newArray = [...letters, ...numbers];//It's also using for returning more than 1 thing from a function?
console.log(newArray);

//This is the same as using
// const newCat = letters.concat(numbers);
// console.log(newCat);
function sumAndMult(x, y) {
  //return [x+y, x*y];
  return [x + y, x * y, x / y];

}

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
  name: 'Sally',
  age: 32,
  address: {
    city: "Carson",
    state: "Colorado"
  }

}

