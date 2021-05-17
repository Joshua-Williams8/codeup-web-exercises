const users = [
  {
    id: 1,
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript'],
    yearsOfExperience: 5
  },
  {
    id: 2,
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php'],
    yearsOfExperience: 6
  },
  {
    id: 3,
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash'],
    yearsOfExperience: 7
  },
  {
    id: 4,
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql'],
    yearsOfExperience: 8
  },
  {
    id: 5,
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php'],
    yearsOfExperience: 9
  }
];

// let exerciseFilter = users.filter(function(n){
//   return n.languages.length >= 3
// });
let exerciseFilter = users.filter(user => user.languages.length >= 3);
// console.log(exerciseFilter);

let exerciseMap = users.map(function (user) {
  return user.name
});

//The use of doing object.property vs object[property] allows you to put another variable in there?
//like in javier's example.
// let exerciseMap = users.map(user => user.name);
// console.log(exerciseMap);
//In shorthand version of this you HAVE TO use => so it auto defined that variable you used?

let average = users.reduce((sum, user, index, array) => {
  // console.log(sum); // This is the sum we using to keep count, The 0 below sets it's initial value.
  // console.log(user); // This is the part of the array were currently on.
  // console.log(index); // This is the index of the array were currently on.
  // // console.log(array); // This is the entire object array, were only using it to get the length.
  sum = sum + user.yearsOfExperience; //No matter what we want to add the sum to the current user years
  // console.log(sum);
  if (index === array.length - 1) {
    return sum / array.length //If we are on the last index (Aka the end of the function) return the average
  } else {
    return sum
  }

}, 0);
// console.log(average);
// let average = sum / users.length;
// console.log(average);
//
let longestEmail = users.reduce((longest, user, index) => {
  if (index === 0) {
    return user.email; //If were on the first index, turn the longest variable into the current email
  } else if (longest.length < user.email.length) {
    return user.email //If the username length is longer take the current email
  } else {
    return longest //If the email isn't longer keep the current value.
  }
}, "");
// console.log(longestEmail);
// array.sort(function(value1,value2){
//   return value2.length - value1.length
// }) // This Would take the array in question, and get the length of each value, and subtract it from each other? thus putting it into a list of which emails are longer.


let usersString = users.reduce(function (nameArray, user, index, array) {
  nameArray.push(user.name);
  if (index === array.length - 1) {
    return `Your instructors are: ${nameArray.join(", ")}`;
  } else {
    return nameArray;
  }
}, []);
// console.log(usersString);

function getUniqueValues(array) {
  //I'm going to use 2 foreach loops so as the loop goes through each element,
  //It will allow me to compare each and every element to each and other element.
  array.forEach(function (elementOne, indexOne) {
    array.forEach(function (elementTwo, indexTwo) {
      //Test log statements to make sure it's going to let me compare values
      //console.log(elementOne, elementTwo)
      //console.log(indexOne,indexTwo)
      //This is if I'm at the SAME INDEX, please don't do anything
      if (indexOne === indexTwo) {
        //console.log("Don't do anything")
        //This is if the elements values are the same, then I want to splice them, from the first index
        //so they don't remove later indexes and cause issues, I have to use indexOne!
      } else if (elementOne === elementTwo) {
        array.splice(indexOne, 1);
      }
    })
  })
  //return on the OUTSIDE of both loops.
  return array
}

let uniqueArray = users.reduce(function (nameArray, user, index, array) {
  nameArray.push(...user.languages); //Using the .push(...Array) separates the array when we push it rather than pushing it normally, and using .push(Array), where we would get an array inside of an array.
  // nameArray = nameArray.concat(user.languages); //Using the concat method we can combine arrays, back to back.
  // nameArray = [...nameArray,...user.languages];
  // console.log(nameArray);
  if (index === array.length - 1) {
    // return getUniqueValues(nameArray);
    return [... new Set(nameArray)].sort(); // Set creates a new array with the unique values
  } else {
    return nameArray;
    // return getUniqueValues(nameArray);
  }
}, []);
console.log(uniqueArray);

let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = chars.filter((c, index) => {
  return chars.indexOf(c) === index; // When we get to the 2nd A that statement will be false so it won't push the 2nd or 3rd letters.
});

// console.log(uniqueChars);

let dupChars = chars.filter((c, index) => {
  return chars.indexOf(c) !== index; //This does the same as above, except we only want the ones it's false for because we want the duplicate numbers.
});

// console.log(dupChars);

//Array.slice(0,#how far I want to go ).whatever method

