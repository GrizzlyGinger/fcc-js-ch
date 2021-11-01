//Declaring dependencies explicitly is another principle of functional programming 
//  If another function depends on a variable or object's presence, that variable or object should be passed directly into the function as an argument
//  This makes the function easier to test and see where potential bugs may arise

// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer(value) {

  return value + 1;

  // Only change code above this line
}