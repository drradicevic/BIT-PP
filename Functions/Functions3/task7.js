/* 
7.	Write a function that says whether a number is perfect.

28 -> 28 is a perfect number.

Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).

E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.  */

function isPerfect(number) {
  var result = "";
  var divisorsSum = 0;
  for (i = 0; i < number; i++) {
    if (number % i === 0) {
      divisorsSum += i;
    }
    if (divisorsSum === number) {
      result = number + " is a perfect number.";
    } else result = number + "is not a perfect number.";
  }
  return result;
}
console.log(isPerfect(28));
console.log(isPerfect(6));
console.log(isPerfect(496));
console.log(isPerfect(8128));
