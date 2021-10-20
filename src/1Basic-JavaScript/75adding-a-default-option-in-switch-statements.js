//May not be able to specify all cases in switch
//Add default statement if there are no matching cases
//  final else in an if/else chain
//  defaults statement is always last

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      answer = "apple";
      break
    case "b":
      answer = "bird";
      break
    case "c":
      answer = "cat";
      break
    default:
      answer = "stuff";
      break;
  }


  // Only change code above this line
  return answer;
}

switchOfStuff(1);