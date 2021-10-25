//'\d' == [0-9]
//  does not match written out numbers ('six')

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;