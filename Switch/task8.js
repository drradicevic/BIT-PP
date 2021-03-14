/*   Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!   */

var num1 = 2;
var num2 = 0;
var sign = "/";
var result = " ";

switch (sign) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/" && num2 != 0:
    result = num1 / num2;
    break;
  default:
    result = "Watch out for division by zero!";
    break;
}
console.log(result);
