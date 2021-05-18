// var test = fetch("https://api.github.com/users/joshua-williams8/events",
//   {
//     headers: {'Authorization': GH_TOKEN},
//
//   });


var test = fetch("https://api.github.com/users/joshua-williams8/events", {
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
  let testDate = new Date("2021-05-17")
  $("h2").html(`Today's date and time is ${firstDate.toString()}`)
  $("h3").first().html(`Today's date and time is ${firstDate.getMonth()} ${firstDate.getDate()} ${firstDate.getFullYear()} ${firstDate.getHours()}:${firstDate.getMinutes()}`)
}).catch(function () {
  console.log("Help failed to load.")
});

//https://www.w3schools.com/js/js_date_methods.asp

function wait(milliseconds) {

  let waitPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (milliseconds < 5000) {
        resolve();
      } else {
        reject();
      }
    }, milliseconds);
  })
  waitPromise.then(() => $("h3").last().html(`Custom Promise is complete!`));
  waitPromise.catch(() => $("h3").last().html(`Custom Promise failed, please refresh`));
}

wait(6000);


// const octokit = new Octokit({auth: GH_TOKEN});

// const response = await octokit.request("GET /repos/joshua-williams8/codeup-web-exercises/", {
//   org: "octokit",
//   type: "private",
// });
