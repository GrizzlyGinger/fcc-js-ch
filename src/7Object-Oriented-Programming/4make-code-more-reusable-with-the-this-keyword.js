//If an object's variable name changes, any code referencing the original name will not work
//  the `this` keyword refers to the object with which the method is associated, in this context
//  `this` makes code reusable and easier to read

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();