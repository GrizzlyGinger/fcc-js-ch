//Methods are properties that are functions
//  allow different behavior to objects beyond accessing a static value for a property

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs."}
};

dog.sayLegs();