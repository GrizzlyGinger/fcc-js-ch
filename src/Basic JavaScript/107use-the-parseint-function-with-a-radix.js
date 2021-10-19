//parseInt() takes a string and returns an int
//Has a second arg for the radix - base number in a string
//  radix can be an int between 2-36

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");