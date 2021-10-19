//Found in https://blog.alexdevero.com/javascript-switch-statement/
//Switch can replace long if/else chains
//If/else better
//  one or two match tests
//  only testing for truthiness
//  testing for different expressions
//switch better
// testing one integer, string, or variable value
// 

function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  // if (val === "bob") {
  //   answer = "Marley";
  // } else if (val === 42) {
  //   answer = "The Answer";
  // } else if (val === 1) {
  //   answer = "There is no #1";
  // } else if (val === 99) {
  //   answer = "Missed me by this much!";
  // } else if (val === 7) {
  //   answer = "Ate Nine";
  // }

  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer"
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);