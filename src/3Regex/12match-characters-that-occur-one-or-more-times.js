//Use '+' to check for/match characters that appear one or more times
//Character or pattern must be present consecutively

let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);