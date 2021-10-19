//conditional or ternary operator - used as a one-line if/else expression
//Syntax: a ? b : c
//  a - condition
//  b - code to execute while a is true
//  c - code to run when condition returns false

function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);