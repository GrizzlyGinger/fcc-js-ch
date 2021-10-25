//Lower and upper number of patterns can be specified using '{3,5}' /// 3 and 5 are the lower and upper limit of patterns to match, respectively

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);