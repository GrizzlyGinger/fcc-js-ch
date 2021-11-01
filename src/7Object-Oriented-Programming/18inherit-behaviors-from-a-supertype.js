//Inheriting from a supertype or 'parent' object is one way to implement DRY
//The syntax 'let animal = new Animal()' has some disadvantages for inheritance
//Using 'let animal = Object.created(Animal.prototype);' creates a new object and sets Animal as the new object's prototype
//  setting the prototype of animal to Animal gives the new object the same "recipe" as any other instance of Animal

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line