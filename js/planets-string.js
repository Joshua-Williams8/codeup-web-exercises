(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
var planetsArray = planetsString.split("|")
     console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
      //useful for with document.getElementById("planetsBR").innerHTML = brPlanets?
var planetsBR = planetsArray.join("<br>")
  console.log(planetsBR);
  //for turning arrays into strings, and then into text on html?
  var bonusPlanets = "<ul>" + "<li>" + planetsArray.join("</li><li>") + "</li>" + "</ul>";
  console.log(bonusPlanets);
  //Jay's idea was a better way to to it also
  var planetsList = "<ul>"
  planetsArray.forEach(function(planet) {
    planetsList = planetsList + "<li>" + planet + "</li>"
  })
  var planetsList = planetsList + "</ul>"
  console.log(planetsList)
})();

