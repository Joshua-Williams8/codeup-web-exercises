//object lecture
var aTruck ={
  make: "Toyota",
  //properties are seperated from each out with COMMAS, and you use the first part with : to say what
  //catergory this property is for.
  model: "Tacoma",
  truck: true,
  //You can put other variables you defined from input in? and boolaeans/numbers
  seats: 5,
  color: "Black",
  mileage: 2025,
  // A function inside of an object is called a method
  drive: function(){
    console.log("Test we are adding 10 mileage.");
    //You can also do this.mileage++ to add an increment of 1
    this.mileage = this.mileage + 10
    //aTruck.mileage = aTruck.mileage + 10; same as this except this ONLY TALKS ABOVE THE OBJECT IT'S IN.
  },
  package: {
    technology: false,
    navi: true,
    chrome: false,
  },
  driveTest: function(miles){
    console.log("Test driving for "  + miles + " miles.")
    this.mileage = this.mileage + miles
  },

}
//I can call to different properties using .property...
//so aTruck.make would return "Toyota"
//You can name new properties by doing
// aTruck.mileage = 2141
//using the delete function will remove properties from objects
//delete aTruck.seats
//aTruck would return everything ELSE, seats is gone.
//You can access objects within objects
//You can look at an object's properties by using a for loop...
for(var property  in aTruck) {
  console.log(property + ":" + aTruck[property]);
}
//to give it a variable, you will use aTruck[make],
//but usually for everything else you use aTruck.make
