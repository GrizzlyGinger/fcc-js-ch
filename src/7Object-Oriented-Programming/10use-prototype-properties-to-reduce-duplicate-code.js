//Properties in a constructor's `prototype` are shared among all instances of the constructor
//  Allows for known default values, like a "recipe" for creating objects

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

// Only change code above this line
let beagle = new Dog("Snoopy");