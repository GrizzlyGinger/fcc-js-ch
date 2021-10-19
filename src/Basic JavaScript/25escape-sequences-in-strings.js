/* 2 reasons to escape characters:
  1. allow otherwise untypeable chars (e.g. carriage return)
  2. represent multiple quotes without JS misinterpreting

  \ Escapable chars:
  \' - single quote
  \" - double quote
  \\ - backslash
  \n - newline
  /r - carriage return
  /t - tab
  \b - word boundary
  \f - form feed
*/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line