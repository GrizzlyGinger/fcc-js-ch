//Function arguments are often misordered
//  if args are different types, function will likely throw a runtime error

function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
// let power = raiseToPower(exp, base);
let power = raiseToPower(base, exp);
console.log(power);