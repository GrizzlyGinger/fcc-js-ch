//Aww, yiss, mini-project to restrict possible usernames using regex
/**
 * Usernames can only use alpha-numeric characters
 * Numbers can only be at the end of usernames
 *  can be 0 or more numbers
 * Letters cna be upper and lowercase
 * Usernames must be at least 2 characters long
 *  2 character usernames can only use alphabet letters
 */

let username = "JackOfAllTrades";
let userCheck = /^[A-Za-z]+[A-Za-z]+\d*$|^[A-Za-z]+\w\d$/; // Change this line
let result = userCheck.test(username);