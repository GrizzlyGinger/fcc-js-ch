//Possible to chain ternary operators
//Not recommended since it makes code harder to read

function checkSign(num) {
  return num > 0 ? "positive"
    : num < 0 ? "negative"
    : "zero"
}

checkSign(10);