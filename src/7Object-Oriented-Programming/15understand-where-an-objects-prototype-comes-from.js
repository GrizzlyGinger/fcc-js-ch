//An object inherits its `prototype` directly from the constructor function that created it
//This relationship can be shown with the `isPrototypeOf` method
//  Bird.prototype.isPrototypeOf(duck)

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
Dog.prototype.isPrototypeOf(beagle);