var boxX = "<div>X</div>"
var boxO = "<div>O</div>"
var boxD = "<div class=\"text-dark\">X</div>"

// alert("Hello you will be playing as X, please click to select a spot, the page will be playing O.")

$(".box").click(function () {
  $(this).html(boxX);
  boxOGo();
  if (winTTT() === true) {
    alert("You win!")
    $(".box").off();
  } else if (loseTTT() === true) {
    alert("You lose!")
    $(".box").off();
  } else if (tieTTT === true) {
    alert("It's a Tie!")
    $(".box").off();
  } else {

  }
});

function boxOGo() {
  var randomNumTest = Math.floor(Math.random() * 9) + 1;
  console.log(randomNumTest);
  if ((winTTT() === true) || (tieTTT() === true) || (loseTTT() === true)) {
    console.log("don't put an O please")
  } else if ((randomNumTest === 1) && ($("#box1").html() === boxD)) {
    $("#box1").html(boxO);
  } else if ((randomNumTest === 2) && ($("#box2").html() === boxD)) {
    $("#box2").html(boxO);
  } else if ((randomNumTest === 3) && ($("#box3").html() === boxD)) {
    $("#box3").html(boxO);
  } else if ((randomNumTest === 4) && ($("#box4").html() === boxD)) {
    $("#box4").html(boxO);
  } else if ((randomNumTest === 5) && ($("#box5").html() === boxD)) {
    $("#box5").html(boxO);
  } else if ((randomNumTest === 6) && ($("#box6").html() === boxD)) {
    $("#box6").html(boxO);
  } else if ((randomNumTest === 7) && ($("#box7").html() === boxD)) {
    $("#box7").html(boxO);
  } else if ((randomNumTest === 8) && ($("#box8").html() === boxD)) {
    $("#box8").html(boxO);
  } else if ((randomNumTest === 9) && ($("#box9").html() === boxD)) {
    $("#box9").html(boxO);
  } else if (
    ($("#box1").html() !== boxD)
    &&
    ($("#box2").html() !== boxD)
    &&
    ($("#box3").html() !== boxD)
    &&
    ($("#box4").html() !== boxD)
    &&
    ($("#box5").html() !== boxD)
    &&
    ($("#box6").html() !== boxD)
    &&
    ($("#box7").html() !== boxD)
    &&
    ($("#box8").html() !== boxD)
    &&
    ($("#box9").html() !== boxD)

  ) {

    alert("Game Over!")
    $(".box").off();
  } else {
    // alert("Help")
    boxOGo();
  }
}

function winTTT(){
  if(
    ($("#box1").html() === boxX)
    &&
    ($("#box2").html() === boxX)
    &&
    ($("#box3").html() === boxX)
    ||
    ($("#box4").html() === boxX)
    &&
    ($("#box5").html() === boxX)
    &&
    ($("#box6").html() === boxX)
    ||
    ($("#box7").html() === boxX)
    &&
    ($("#box8").html() === boxX)
    &&
    ($("#box9").html() === boxX)
    ||
    ($("#box1").html() === boxX)
    &&
    ($("#box4").html() === boxX)
    &&
    ($("#box7").html() === boxX)
    ||
    ($("#box1").html() === boxX)
    &&
    ($("#box5").html() === boxX)
    &&
    ($("#box9").html() === boxX)
    ||
    ($("#box2").html() === boxX)
    &&
    ($("#box5").html() === boxX)
    &&
    ($("#box8").html() === boxX)
    ||
    ($("#box3").html() === boxX)
    &&
    ($("#box5").html() === boxX)
    &&
    ($("#box7").html() === boxX)
    ||
    ($("#box3").html() === boxX)
    &&
    ($("#box6").html() === boxX)
    &&
    ($("#box9").html() === boxX)
    ||
    ($("#box4").html() === boxX)
    &&
    ($("#box5").html() === boxX)
    &&
    ($("#box6").html() === boxX)
    ||
    ($("#box7").html() === boxX)
    &&
    ($("#box8").html() === boxX)
    &&
    ($("#box9").html() === boxX)
  ) {
    return true
  } else {
    return false
  }
}
function loseTTT(){
  if(
    ($("#box1").html() === boxO)
    &&
    ($("#box2").html() === boxO)
    &&
    ($("#box3").html() === boxO)
    ||
    ($("#box4").html() === boxO)
    &&
    ($("#box5").html() === boxO)
    &&
    ($("#box6").html() === boxO)
    ||
    ($("#box7").html() === boxO)
    &&
    ($("#box8").html() === boxO)
    &&
    ($("#box9").html() === boxO)
    ||
    ($("#box1").html() === boxO)
    &&
    ($("#box4").html() === boxO)
    &&
    ($("#box7").html() === boxO)
    ||
    ($("#box1").html() === boxO)
    &&
    ($("#box5").html() === boxO)
    &&
    ($("#box9").html() === boxO)
    ||
    ($("#box2").html() === boxO)
    &&
    ($("#box5").html() === boxO)
    &&
    ($("#box8").html() === boxO)
    ||
    ($("#box3").html() === boxO)
    &&
    ($("#box5").html() === boxO)
    &&
    ($("#box7").html() === boxO)
    ||
    ($("#box3").html() === boxO)
    &&
    ($("#box6").html() === boxO)
    &&
    ($("#box9").html() === boxO)
    ||
    ($("#box4").html() === boxO)
    &&
    ($("#box5").html() === boxO)
    &&
    ($("#box6").html() === boxO)
    ||
    ($("#box7").html() === boxO)
    &&
    ($("#box8").html() === boxO)
    &&
    ($("#box9").html() === boxO)
  ) {
    return true;
  } else {
    return false;
  }
}
function tieTTT(){
  if(winTTT() === false && loseTTT() === false && (
    ($("#box1").html() !== boxD)
    &&
    ($("#box2").html() !== boxD)
    &&
    ($("#box3").html() !== boxD)
    &&
    ($("#box4").html() !== boxD)
    &&
    ($("#box5").html() !== boxD)
    &&
    ($("#box6").html() !== boxD)
    &&
    ($("#box7").html() !== boxD)
    &&
    ($("#box8").html() !== boxD)
    &&
    ($("#box9").html() !== boxD)

  ));
}

