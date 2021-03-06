//Constructors that inherit its prototype from a supertype constructor can still have own methods and properties in addition to inherited ones
//Functions are added to the child's prototype the same as any constructor function

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log("Woof!");
}

// Only change code above this line

let beagle = new Dog();