function fizzBuzz(num) {
  for (let i = 0; i <= num; i++) {
    if ((i % 3 === 0) && (i % 5 === 0) && (i !== 0)) {
      console.log("FizzBuzz", i);
    } else if (i % 3 === 0 && (i !== 0)) {
      console.log("Fizz", i);
    } else if (i % 5 === 0 && (i !== 0)) {
      console.log("Buzz", i);
    }
  }
}

const giveSeven = function () {
  return 7
};

const returnSeven = () => 7;

