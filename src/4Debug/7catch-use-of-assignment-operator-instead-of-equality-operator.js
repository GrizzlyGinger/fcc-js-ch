//Use care to ensure boolean comparisons do not use the assignment operator '='
// only use '==' or '===' to test equality and strict equality

let x = 7;
let y = 9;
let result = "to come";

// if(x = y)
if(x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);