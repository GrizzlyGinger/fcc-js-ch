//Removing whitespace from beginning and end of a string is a typical processing task

let hello = "   Hello, World!  ";
let wsRegex = /\s*(\w+\S \w+\S)\s*/; // Change this line
let result = hello.replace(wsRegex, '$1'); // Change this line

console.log(result)