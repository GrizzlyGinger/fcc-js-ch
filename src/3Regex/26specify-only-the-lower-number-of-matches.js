//Use '{3,} to specify only the lower number of patterns to match with no upper limit

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);