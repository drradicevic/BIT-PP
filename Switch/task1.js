/* 1. Write a program that shows text representation of a day in a week for a number input from
1 to 7. Print output in console.
For input 1, output should be “Monday”. */

var day = 1;
var result = " ";

switch (day) {
  case 1:
    result = "Monday";
    break;
  case 2:
    result = "Thuesday";
    break;
  case 3:
    result = "Wednesday";
    break;
  case 4:
    result = "Thursday";
    break;
  case 5:
    result = "Friday";
    break;
  case 6:
    result = "Saturday";
    break;
  default:
    result = "Sunday";
    break;
}
console.log(result);
