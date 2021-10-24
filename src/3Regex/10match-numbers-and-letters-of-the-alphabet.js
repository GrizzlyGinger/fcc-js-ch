//'-' can also be used to match a range of numbers

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s]|[2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line