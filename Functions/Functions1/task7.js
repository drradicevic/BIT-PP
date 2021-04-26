/*  7. Write a program that calculates a number of digits of a given number.    */

function calculates(number) {
  var count = 0;

  if (number < 0) {
    number *= -1;
  }
  for (var i = number; i >= 1; i /= 10) {
    count++;
  }

  return count;
}

console.log(calculates(-5555));
