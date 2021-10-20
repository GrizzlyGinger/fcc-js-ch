//Arrow functs can pass arguments just like regular functs
//  If an arrow funct has a single param, () can be omitted
//  Can pass more than one arg

const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));