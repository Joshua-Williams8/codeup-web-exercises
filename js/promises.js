// var test = fetch("https://api.github.com/users/joshua-williams8/events",
//   {
//     headers: {'Authorization': GH_TOKEN},
//
//   });



var test = fetch("https://api.github.com/users/joshua-williams8/events", {
  headers: {'Authorization': GH_TOKEN},
  username: "joshua-williams8",

});

 console.log(test);

// const octokit = new Octokit({auth: GH_TOKEN});

// const response = await octokit.request("GET /repos/joshua-williams8/codeup-web-exercises/", {
//   org: "octokit",
//   type: "private",
// });
