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

let exerciseMap = users.map(function(user){
  return user.name
});
// let exerciseMap = users.map(user => user.name);
// console.log(exerciseMap);
//In shorthand version of this you HAVE TO use => so it auto defined that variable you used?

let sum = users.reduce((accumulation, user) => {
  console.log(accumulation);
  return accumulation + user.yearsOfExperience;

}, 0);
let average = sum / users.length;
console.log(average);

let longestEmail = users.reduce((longest, user) => {
  if (longest.length < user.email.length ) {
    return user.email
  } else {
    return longest
  }
}, {});

console.log(longestEmail);


let usersString = users.reduce((longest, user) => {
  if(users[0].name === user.name){
    return user.name
  }
  return longest + ", " + user.name;
}, "");

// console.log(usersString);
