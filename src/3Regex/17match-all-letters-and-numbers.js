//Shorthand character classes are used to replace common character sets
//'\w' == [A-Za-Z0-9_]

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;