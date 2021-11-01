//Functional programming allows for simple, isolated functions that provide solutions without any side effects outside the function scopee: INPUT -> PROCESS -> OUTPUT
/**
 * Allows for:
 *  Isolated functions - No dependence on state of the program, including mutable global variables
 *  Pure functions - same input always gives the same output
 *  Functions with limited side effects - any mutations to the state of the program outside 
 *    the function are carefully controlled
 */

// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line