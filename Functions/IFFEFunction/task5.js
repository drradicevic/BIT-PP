/* 5. Write a function that returns a function that calculates a decimal value of the
given octal number.
Input: 034
Output: 28 */

var octal = (function (num) {
  var octalNumber = parseInt(num);
  return octalNumber;
})(034);

console.log(octal);
