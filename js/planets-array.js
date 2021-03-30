(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift("The Sun");
    console.log(planets);

    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push("Pluto");
    console.log(planets);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.shift();
    console.log(planets);

    console.log('Removing "Pluto" from the end of the planets array.');
    planets.pop();
    console.log(planets);

    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log(planets.indexOf("Earth"))

    console.log("Reversing the order of the planets array.");
    //above console.log still will return 2 because this happens AFTER it gets asked for that log.
    planets.reverse();
    //reverse does effect the actual array?
    console.log(planets);

    console.log("Sorting the planets array.");
    planets.sort();
    //sort does effect the actual array
    console.log(planets);
})();
//If you want to make a copy of an array without actually changing it maybe do a
//var otherARray= "A function that does what we want"(array)
