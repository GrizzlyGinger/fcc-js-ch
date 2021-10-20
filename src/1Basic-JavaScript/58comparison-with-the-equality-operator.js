//Many comparison operators. All return true or false
//Most basic is '==' - returns true if two values are equivalent
//  different from '=' assignment operator

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);