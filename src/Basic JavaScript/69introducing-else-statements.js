//When an if statement is true, following block of code is executed
//Else gives you an alternate block for false

function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  // if (val <= 5) {
  //   result = "5 or Smaller";
  // }

  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);