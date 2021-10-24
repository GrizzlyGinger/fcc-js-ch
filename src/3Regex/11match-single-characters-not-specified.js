//Use '^' to create a Negated character set - set of characters you do not want to match
//  '^' is placed after the opening bracket and before the characters to be negated

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line