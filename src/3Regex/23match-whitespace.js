//Also possible to match whitespace using '\s'
//  '\s' == [ \r\t\f\n\v]
//    '\r' == carriage return
//    '\t' == tab
//    '\f' == form feed
//    '\n' == new line
//    '\v' == vertical tab

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);