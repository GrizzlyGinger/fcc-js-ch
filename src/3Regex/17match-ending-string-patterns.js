//Use '$' to search for characters at the end of strings
// '$' goes at the end of a regex

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);