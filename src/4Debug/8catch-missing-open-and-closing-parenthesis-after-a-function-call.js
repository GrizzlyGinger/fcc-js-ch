//Functions and methods that don't take arguments still need open parentheses when created and called
//Can often catch this error by logging variable values or their types to the console
//  can see if one is set to a function reference instead of the expected function return value

function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

// let result = getNine;
let result = getNine();
console.log(result);