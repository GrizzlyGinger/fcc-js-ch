//Can chain if statements together for multiple conditions

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  // if (val < 5) {
  //   return "Smaller than 5";
  // }

  // return "Between 5 and 10";

  else if (val < 5) {
    return "Smaller than 5";
  }

  else {
    return "Between 5 and 10";
  }
}

testElseIf(7);