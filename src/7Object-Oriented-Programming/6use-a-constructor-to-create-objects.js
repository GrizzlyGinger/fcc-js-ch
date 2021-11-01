//`this` inside a constructor always refers to the object being created
//The `new` operator is used when calling a constructor
//  let brownDog = new Dog();
//Without `new`, `this` inside the constructor would not point to the newly created object

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line
let hound = new Dog();