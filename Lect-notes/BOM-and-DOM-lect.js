"use strict"

//Look up window object, rather than BOM or browser object model
//DOM stands for Document Object Model

//The small stuff we learned like alrt, confirm, and prompt are window objects or BOM objects

//For document stuff later, you don't have to specify it with window.document, you can just document...
//test open window.close() or window.open() or just open() close() to get a better idea of what were talking about (Put these in the browser)
//innerwidth shows the widt of the page, and innerheight shows the height of the page, (might need infor about it later) like size no location I believe
//navigator displays a bunch of info about the browser.
// like what platform a user is using, or what OS their on languages also?
//All types of stuff is availble you use look at the screen size, default settings?
//pageYOffset shows where you're scrolled at?
//scrollTo(0,400) like those buttons that scroll you down or around, or like maps in apps?
// var count = 0
// function hey(){
//   console.log("hey " + count);
//   count = count +1
// }
//setinterval(function() (do hey without the (), interval?) (use 1000)
//interval is TIME in MILLISECONDS so 1000 = 1 second.
//clearinterval?

// var count = 0
// var thisWillStop;
// function hey(){
//   if (count < 10) {
//     console.log("hey " + count);
//     count = count + 1;
//   } else {
//     clearInterval(thisWillStop);
//   }
// }
// var thisWillStop;
// thisWillStop = setInterval(hey, 1000)
//But why does above set it?
//The function above stops because we call clear interval?


 // variablewithHTML.innerHTML;

var accessTheDom = document.getElementById("boi");
var showMe = accessTheDom.innerHTML;
alert(showMe);
var gang = document.getElementById("gang")

//Look what happens if the script is in the header vs the bottom. or if you take off certain bits

accessTheDom.innerText = accessTheDom.innerHTML + " hi"
accessTheDom.setAttribute("class", "boiclass")

//Oof it worked.
// gang.setAttribute("style", "color:purple") has be commented out for below stuff to work.


//Just testin setattribute thing above.
var gangs = document.getElementsByClassName("gang");
// gangs[0].style.color = "green";
// gangs[1].style.color = "hotpink";

for(var i = 0; i < gangs.length; i++) {
  gangs[i].style.color = "grey";
}

//For later keep in mind were using input type="button" (it also has a value="submit" not submit because were only doing stuff in the page with our JS, not submiting a form to another page.
//You can use a .onclick to call a function ?

//target.addEventListerner("type", listener);

document.addEventListener("click", function(event) {

});

docuement.querySelector("")document.addEventListener("click", function(event) {

});

