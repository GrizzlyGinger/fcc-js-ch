//Use the string.match(regex) method to extract matches from string
//  uses opposite syntax from regex.test(string)

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line