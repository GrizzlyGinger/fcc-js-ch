//`splice` on the other hand mutates the original array by removing elements from an array at specified indices
//  Takes 2 arguments
//    index of where to start removing
//    number of items to remove
//  Defaults to remove items through the end if second argument not provided

function nonMutatingSplice(cities) {
  // Only change code below this line
  //returns a new array with the first three elements of cities
  //cities mutates to a new array minus the first three elements
  return cities.slice(0, 3);

  // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);