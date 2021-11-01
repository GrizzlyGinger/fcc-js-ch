//The `constructor` property is a reference to the constructor function that created an Object instance
//  allows checking for the constructor property to find what kind of object it is

function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
  if(candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}