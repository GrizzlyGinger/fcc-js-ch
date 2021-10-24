//Literal patterns (/literal/) and wildcard (/./) are extremes of regex
//Character classes allow for flexible searching
//  allow you to define a group of characters by placing them in []

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line