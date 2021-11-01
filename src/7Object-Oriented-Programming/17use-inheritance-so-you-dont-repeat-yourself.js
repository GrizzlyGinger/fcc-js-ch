//Repeating code requires fixing it in multiple places
//Use the DRY principle (Don't Repeat Yourself) to avoid creating more work than necessary and avoiding errors
//Use an object's supertype to implement common functions

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  // eat: function() {
  //   console.log("nom nom nom");
  // }
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  // eat: function() {
  //   console.log("nom nom nom");
  // }
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};