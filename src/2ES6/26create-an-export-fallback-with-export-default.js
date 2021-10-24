//Export default is typically used if only one value is being exported from a file
//  Also used to create a fallback value for a file or module
//Can only have one value per module or file be a default export
//Cannot use export default with var, let, or const

function subtract(x, y) {
  return x - y;
}

//anonymous function
export default function( x, y ) {
  x - y;
}