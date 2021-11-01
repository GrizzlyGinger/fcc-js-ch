//Inherited methods can be overridden by adding a method to ChildObject.prototype using the same method name as the method to be overridden
//Similar to leveraging early return on a function
//  JS searches for an appropriate method starting with the childest object and stops looking once it finds a corresponding method

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
}

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());