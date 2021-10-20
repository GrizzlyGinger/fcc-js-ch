//Biggest problem with \/ar is ability to overwrite w/o an error
//let keyword throws a console error if overwrite is attempted

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();