//Use the 'g' flag to search or extract a pattern more than once

let twinkleStar = "Twinkle, twinkle, little star";
//Can have multiple flags following a regex
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line