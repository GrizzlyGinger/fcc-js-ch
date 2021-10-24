//Regular expressions are used in programming languages to match parts of strings
//  patterns can be created to help with that matching
//Find 'the' in "The dog chased the cat" - regex = /the/
// quotes are not required in regex
//.test(string) method applies the regex to string and returns true if the pattern is found or false if it is not found

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line