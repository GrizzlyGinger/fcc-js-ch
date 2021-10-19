//Functions are executed top to bottom
//Order is important for if, else if statements

function orderMyLogic(val) {
  // if (val < 10) {
  //   return "Less than 10";
  // } else if (val < 5) {
  //   return "Less than 5";
  if (val < 5) {
    return "Less than 5";
  }
  else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);