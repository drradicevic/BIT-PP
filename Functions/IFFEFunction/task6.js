/*6. Write a function that checks if a given string is valid password. The password is
valid if it is at least 6 characters long and contains at least one digit. The function
should receive two callbacks named successCallback and errorCallback that should be called
in case password is correct or invalid.
Input: JSGuru
Output: Your password is invalid!
Input: JSGuru123
Output: Your password is cool!  */

var checkPassword = (function (password) {
  var result = "";
  oneNumber = false;
  for (i = 0; i <= password.length; i++) {
    if (password.length >= 6 && isFinite(password[i]) === true) {
      oneNumber = true;
    }
    if (oneNumber === true) {
      result = "Your password is cool!";
    } else {
      result = "Your password is invalid!";
    }
  }
  return result;
})("JSGuru123");

console.log(checkPassword);
