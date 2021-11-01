//A core principle in functional programming is to not change or mutate things which can lead to side affects which cause bugs

// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line
  
  //+= would mutate the global variable, so + simply returns a value based on the global variable without changing it
  return fixedValue + 1;

  // Only change code above this line
}