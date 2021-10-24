//Choose which parts of a file or module to load with import
//Syntax: import { add } from './math_functions.js';
//  finds the add function in math_functions.js, imports it for use, and ignores the rest
//  ./ (relative file path) tells import to look for math_functions.js in the same directory as the current file
//Can import more than one item with the following syntax:
//  import { add, subtract } from './math_functions.js';

// Only change code above this line
import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");