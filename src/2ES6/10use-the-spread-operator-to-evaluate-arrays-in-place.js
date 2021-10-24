//spread operator - '...' expands arrays and other expressions where multiple params or elements are expected
//...arr returns an unpacked array, or spreads it out
//  only works in-place, like an arg to a funct or in an array literal

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);