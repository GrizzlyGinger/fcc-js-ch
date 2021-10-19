//'&&' - ampersand and ampersand - and operator - if left and right are true, return true
//  else return false
//like as nesting two if statements

function testLogicalAnd(val) {
  // Only change code below this line

  // if (val) {
  //   if (val) {
  //     return "Yes";
  //   }
  // }

  if (val <= 50 && val >=25) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);