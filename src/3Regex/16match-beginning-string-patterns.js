//Outside of a character set, '^' is used to search for paterns at the beginning of strings

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);