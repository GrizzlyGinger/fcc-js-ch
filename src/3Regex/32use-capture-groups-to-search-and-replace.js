//Use 'string1.replace(regex, string2)' to search string1 with regex and replace matched text with string2
//  can access capture groups in the replacement string with '$'

let str = "one two three";
let fixRegex = /(one) (two) (three)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);

console.log(result)