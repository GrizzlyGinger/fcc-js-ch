//rest - '...args' allows creation of functions with a variable number of args
//Eliminates the need to check args array and allows use of map() filter() and reduce()

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}