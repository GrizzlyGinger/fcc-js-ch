//When an object inherits its prototype from another object, it also inherits the supertype's constructor property, but all instances of the child type should show they were constructed by the child type and not the supertype
//  this can be accomplished by manually setting the constructor property of the child type

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line

Bird.prototype.constructor = Bird; //Added this line
Dog.prototype.constructor = Dog; //Added this line

let duck = new Bird();
let beagle = new Dog();