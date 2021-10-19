// '||' - double bong - or operator - if either left or right are true, return true
//  else return false
//Like two non-nested if statements

function testLogicalOr(val) {
  // Only change code below this line

  // if (val) {
  //   return "Outside";
  // }

  // if (val) {
  //   return "Outside";
  // }

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);