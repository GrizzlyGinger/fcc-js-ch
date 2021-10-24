//Regex can match both upper and lower case with the 'i' flag appended to the regex
// e.g. /ignorecase/i

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);