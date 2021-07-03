"use strict"

function filterNumbers(arrayMixed){
  var resultArray = [];
  arrayMixed.forEach(function(element,index){
    if(typeof element === "number"){
      resultArray.push(element);
    }
  })
  return resultArray;
}
var dogs = [
  {
    name: "Chompers",
    breed: "Pug",
    age: 7
  },
  {
    name: "Freddy",
    breed: "Lab",
    age: 4
  },
  {
    name: "Mr. Pig",
    breed: "Mastif",
    age: 10
  }
];
function getOlder(objectArray){
  objectArray.forEach(function(dog,index){
    console.log(dog.age);
    dog.age = dog.age + 1;
  })
  return objectArray;
}
var cars = [
  {
    make: 'Volvo',
    color: 'red',
    year: 1996,
    isDirty: true
  },
  {
    make: 'Toyota',
    color: 'black',
    year: 2004,
    isDirty: false
  },
  {
    make: 'Ford',
    color: 'white',
    year: 2007,
    isDirty: true
  }
];
function washCar(objectArray){
  objectArray.forEach(function(car,index){
    console.log(car.isDirty);
    car.isDirty = false
  })
  return objectArray;
}
var emails = [
  {
    isAdmin: true,
    email: 'user1@email.com'
  },
  {
    isAdmin: true,
    email: 'user2@email.com'
  },
  {
    isAdmin: false,
    email: 'user3@email.com'
  }
];
function adminList(emailList){
  var resultArray = []
  emailList.forEach(function(email,index){
    if (email.isAdmin === true) {
      resultArray.push({ isAdmin: email.isAdmin, email: email.email},)
    }
  });
  return resultArray
}
var breads  = [
  "white",
  "wheat",
  "rhy",
  "white"
];

var fillings = [
  "pb&j",
  "ham",
  "cheese steak",
  "tuna"
];




function makeSandwhichObjects(arrayOne,arrayTwo){
  let resultArrays = [];
  arrayOne.forEach(function(elementOne,indexOne){
    arrayTwo.forEach(function(elementTwo,indexTwo){
      if (indexOne === indexTwo){
        resultArrays.push([elementOne,elementTwo],);
      }
    })
  })
  return resultArrays
}

function getRandomNumber(min,max){
  return Math.floor(Math.random() * max) + min;
}

function makeSandwhichObjectsRandom(arrayOne,arrayTwo){
  let resultArrays = [];
  arrayOne.forEach(function(elementOne,indexOne){
    resultArrays.push([elementOne,arrayTwo[getRandomNumber(0,arrayTwo.length)]],);

  })
  return resultArrays
}

