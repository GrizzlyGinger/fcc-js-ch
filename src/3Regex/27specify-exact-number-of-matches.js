//Use '{3}' to specify matching a pattern a specific number of times

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);