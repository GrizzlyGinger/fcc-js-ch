//Greedy match finds the longest possible part of a string that fits the regex pattern - default
//Lazy match finds the shortest possible
//  use '?' to change to lazy matching

let text = "<h1>Winter is coming</h1>";
//Returns '<h1>' instead of '<h1>Winter'
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);