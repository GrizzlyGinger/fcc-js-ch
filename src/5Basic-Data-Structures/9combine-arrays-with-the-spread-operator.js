//Spread operator can also combine arrays or insert all elements of one array into another at any index
// overcomes concatenation limitation of only allowing combination at the beginning or end of arrays

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
  return sentence;
}

console.log(spreadOut());