//New objects created with a constructor are instances of their constructors
//Like `typeof` for values, `instanceof` allows comparison of an object to a constructor
//  returns true or false depending on whether the object was created using the constructor or not

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(3);
myHouse instanceof House;