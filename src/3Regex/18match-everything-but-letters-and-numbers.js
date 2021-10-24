//The shorthand character class '\W' == [^A-Za-z0-9_]
//  Basically is the negated character set of '\w'

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;