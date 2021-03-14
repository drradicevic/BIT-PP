/*  4. Write a program that for a 1-12 number input (representing a month in a year) shows that
month’s name. All other cases output a message explaining that input must be a number
between 1 and 12.
For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”.   */

var month = 13;
var result = " ";

switch (month) {
  case 1:
    result = "January";
    break;
  case 2:
    result = "February";
    break;
  case 3:
    result = "March";
    break;
  case 4:
    result = "April";
    break;
  case 5:
    result = "May";
    break;
  case 6:
    result = "Jun";
    break;
  case 7:
    result = "July";
    break;
  case 8:
    result = "August";
    break;
  case 9:
    result = "September";
    break;
  case 10:
    result = "Oktober";
    break;
  case 11:
    result = "November";
    break;
  case 11:
    result = "December";
    break;
  default:
    result = "Input must be a number between 1 and 12";
    break;
}
console.log(result);
