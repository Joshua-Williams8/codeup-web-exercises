// var test = fetch("https://api.github.com/users/joshua-williams8/events",
//   {
//     headers: {'Authorization': GH_TOKEN},
//
//   });
const month = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function date(number) {
  if (number == 1) {
    return "1st"
  } else if (number == 2) {
    return "2nd"
  } else if (number == 3) {
    return "3rd"
  } else {
    number = number + "";
    if (number[number.length - 1] == 1) {
      return number + "st"
    } else if (number[number.length - 1] == 2) {
      return number + "nd"
    } else if (number == 13) {
      return number + "th"
    } else if (number[number.length - 1] == 3) {
      return number + "rd"
    } else {
      return number + "th"
    }
  }
}

let test = fetch("https://api.github.com/users/joshua-williams8/events", {
  headers: {'Authorization': GH_TOKEN}

}).then(function (data) {
  console.log(data) //This only shows what response we got?
  return data.json() //Returns a an array with use-able data inside,
}).then(function (data) {
  console.log(data);
  console.log(data[0]);
  console.log(data[0].created_at);
  let firstDate = new Date(data[0].created_at);

  console.log(firstDate);
  let testDate = new Date("2021-05-17");
  $("h2").html(`Your last push was ${firstDate.toString()}`);
  $("h3").first().html(`Your last push was ${month[firstDate.getMonth()]} ${date(firstDate.getDate())} ${firstDate.getFullYear()} ${firstDate.getHours()}:${firstDate.getMinutes()}`);
}).catch(function (error) {
  console.log("Help failed to load.");
});

//https://www.w3schools.com/js/js_date_methods.asp

function wait(milliseconds) {

  let waitPromise = new Promise((resolve, reject) => {
    return setTimeout(() => {
      if (milliseconds < 5000) {
        resolve();
      } else {
        reject();
      }
    }, milliseconds);
  });
  waitPromise.then(() => $("h3").last().html(`${milliseconds / 1000} seconds passed and it worked.`));
  waitPromise.catch(() => $("h3").last().html(`${milliseconds / 1000} seconds passed and it failed, please refresh`));
}

wait(3000);

function wait2(milliseconds) {

  let waitPromise = new Promise((resolve, reject) => {
    return setTimeout(() => {
      if (milliseconds < 5000) {
        resolve();
      } else {
        reject();
      }
    }, milliseconds);
  });

}

// wait2(3000).then(message => console.log(message))
//   .catch(message => console.log(message));


// const octokit = new Octokit({auth: GH_TOKEN});

// const response = await octokit.request("GET /repos/joshua-williams8/codeup-web-exercises/", {
//   org: "octokit",
//   type: "private",
// });

//“books”: [
//   {
//     “title”: “Garfield at Large: His First Book”,
//     “author”: {
//       “firstName”: “Jim”,
//       “lastName”: “Davis”
//     }
//   },
//   {
//     “title”: “Garfield Gains Weight: His Second Book”,
//     “author”: {
//       “firstName”: “Jim”,
//       “lastName”: “Davis”
//     }
//   },
//   {
//     “title”: “The Hunchback of Notre-Dame”,
//     “author”: {
//       “firstName”: “Victor”,
//       “lastName”: “Hugo”
//     }
//   },
//   {
//     “title”: “How To Draw Manga”,
//     “author”: {
//       “firstName”: “Katy”,
//       “lastName”: “Coope”
//     }
//   }
// ]
//


