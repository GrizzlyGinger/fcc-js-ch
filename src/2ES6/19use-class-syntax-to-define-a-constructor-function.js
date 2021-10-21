//ES6 also provides syntax to create objects with the class keyword
//  syntax is just syntax, not full-fledged class-based implementation like in Java, Ruby, Python, etc.
//ES5 used constructor function and the new keyword to instantiate an object
//  class simply replaces the constructor function creation
//class declares a new function to which a constructor is added
// constructor is invoked when new is called on the class to create a new object
//UpperCamelCase should be used for ES6 class names

// Only change code below this line
class Vegetable {
  constructor(vegetableName) {
    this.name = vegetableName;
  }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'