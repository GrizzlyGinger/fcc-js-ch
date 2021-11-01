//Constructors are functions that create new objects
//  define properties and behaviors (methods) that will belong to the new object
//  like blueprints
//Defined with a capitalized name to distinguish them from other non-constructor functions
//Use keyword `this` to set properties of the created object
//Define properties and behaviors instead of returning a value like other functions

function Dog() {
  this.name = "Bambi";
  this.color = "blonde";
  this.numLegs = 4;
}