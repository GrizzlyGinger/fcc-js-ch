//Always with an equal - '<=' - right-facing, sandwich-eating alligator - if left is less than or equal to right, return true
//  else return false
//non-strict

function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);