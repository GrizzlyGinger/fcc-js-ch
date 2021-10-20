//\/ar declarations can be global or local to a function
//let can be local to individual code blocks, statements, or expressions
//  e.g. in a for loops initial statements or inside execution blocks

function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}