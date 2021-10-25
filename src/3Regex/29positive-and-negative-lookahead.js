//Lookaheads - patterns that tell JS to look-head and check for patterns further along
//  positive - make sure the element is present, but won't match it
//    (?=...)
//  negative - make sure the element is not there and return the rest of the pattern
//    (?!=...)

let sampleWord = "astronaut";
//Matches passwords > 5 characters with 2 consecutive digits
let pwRegex = /(?=\w{6,})(?=\D*\d\d)/; // Change this line
let result = pwRegex.test(sampleWord);