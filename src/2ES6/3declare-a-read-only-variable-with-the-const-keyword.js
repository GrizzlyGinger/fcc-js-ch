//const keyword declares\/ariables like let, but values are read-only
//once a const \/ariable is assigned, it cannot be reassigned and will throw an error if reassignment is attempted
//Common naming convention for const is all caps words separated by underscore

function printManyTimes(str) {

  // Only change code below this line

   const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // Only change code above this line

}
printManyTimes("freeCodeCamp");