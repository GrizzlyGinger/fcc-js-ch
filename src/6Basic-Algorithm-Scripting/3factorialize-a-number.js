//'!' = factorial
//5! = 5 * 4 * 3 * 2 * 1 

function factorialize(num) {
  //setup
  let factorial = 1;

  //Multiply the base number by each digit less than it
  //Can leave out 1 since num * 1 = num
  for(let i = num; i > 1; i--) {
    factorial *= i;
  }
  return factorial;
}

factorialize(5);