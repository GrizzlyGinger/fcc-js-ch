//Capture groups can be used to find repeated substrings
// constructed by enclosing the regex pattern to be captured in parentheses
//Matched substring stored to a temporary "variable
//  "variable" can be accessed within the same regex using '\%NumberOfCaptureGroup%'
//    capture groups automaticlaly numbered left-to-right by position of their opening perenthesis
//Using .match() with a capture group will return an array with the matched substring and its captured groups

let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Change this line
let result = reRegex.test(repeatNum);
console.log(reRegex.test("42 42 42 42"))