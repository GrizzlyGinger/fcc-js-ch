//Can import all of a file's contents
//Syntax: import * as myMathModule from "./math_functions.js";
//Creates an object called myMathModule containing all exports from math_functions.js
//  Can access all functions like any other object

import * as stringFunctions from "./string_functions.js";
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");