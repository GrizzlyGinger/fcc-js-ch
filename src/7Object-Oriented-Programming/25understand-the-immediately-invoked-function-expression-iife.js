//A common pattern in JS is to execute a function as soon as it is declared
//Anonymous functions are are bounded by '()' and have another set of '()' at the end to immediately execute or invoke the function
//  Known as an immediately invoked funciton expression (IIFE)

// function makeNest() {
//   console.log("A cozy nest is ready");
// }

// makeNest();

(function (){
  console.log("A cozy nest is ready");
})();