//Storing values: everything to the right of '=' is resolved before assignment
//Can assign the return of a function to a variable

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);