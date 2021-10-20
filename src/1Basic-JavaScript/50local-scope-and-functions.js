//Variables declared within a function (including parameters) have local scope - only visible within the function.


function myLocalScope() {

  // Only change code below this line
  var myVar = "is here.";
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);