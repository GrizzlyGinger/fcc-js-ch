//The prototype of a subtype or child object can also be set as an instance of the supertype or parent object's prototype
//This passes all the "ingredients" or properties and methods of the supertype prototype to the subtype prototype

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype); //Added this line

let beagle = new Dog();