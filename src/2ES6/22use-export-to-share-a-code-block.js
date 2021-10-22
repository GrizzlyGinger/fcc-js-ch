//Export can be used to share functions from a file that may contain several
/*
 * Simple syntax:
 * export const add = (x, y) => {
 *  return x + y;
 * }
 * 
 * Verbose? (desugared?) syntax:
 * const add = (x, y) => {
 *  return x + y;
 * }
 * 
 * export { add };
 */
//When a variable or function is exported, it can be imported into another file and used without having to rewrite the code
//  can export multiple things by repeating above syntax for each thing
//  can also export by placing them all in the same export statement
//     export { add, subtract };

const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export {uppercaseString, lowercaseString};