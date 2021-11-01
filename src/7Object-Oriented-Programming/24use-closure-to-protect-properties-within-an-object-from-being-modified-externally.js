//Object properties are public by default which means any code can easily change properties to any value
//This can cause issues with sensitive information like passwords or account numbers
//Public properties can be made private by creating a variable within the constructor function - privileged variable
//  This limits the scope of the variable to the constructor function versus globally accessible
//  Prevents the variable from being accessed or changed by anything outside the constructor
//  `closure` - A function always has access to the context in which it was created

function Bird() {
  // this.weight = 15;
  let weight = 15;

  this.getWeight = function() {
    return weight;
  }

}