/*  7. Write a program that calculates a number of digits of a given number.    */

function calculates(number) {
  var count = 0;
  for (var i = number; i >= 1; i /= 10) {
    count++;
  }

  return count;
}

console.log(calculates(555));
