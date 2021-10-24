//Some devs declare const by default and only use let if they know they will need to reassign the value
//Arrays assigned with const are still mutable, but the \/ariable cannot be reassigned using the identifier

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  // Using s = [2, 5, 7] would be invalid
  s.unshift(s.pop());

  // Only change code above this line
}
editInPlace();