//Template literal - special string allowing creation of multi-line strings and use string interpolation (replacing placeholders with strings to create strings
//  uses backticks '`' not quotes to wrap string
//    allows for multi-line string
//  ${variable} syntax for placeholders
//    removes need for + concatenation
//    can still include expressions inside ${}
//      ${a + b}

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];

  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);