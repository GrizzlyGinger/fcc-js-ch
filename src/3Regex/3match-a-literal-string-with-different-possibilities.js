//Using a single string in regex is limited to that pattern
//Regex can use operators like '|' - or to search for multiple patterns
//  can use multiple '|' operators for more than 2 patterns

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);