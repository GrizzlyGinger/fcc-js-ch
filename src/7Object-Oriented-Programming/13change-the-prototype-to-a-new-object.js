//`prototype` can be an object containing multiple properties, allowing all properties to be added to the prototype at once

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: function() {
    console.log("nom snarf nom");
  },
  describe: function() {
    console.log("My name is " + this.name + ". Hello!");
  }
};