/* 4.	Write a function that reverses a number. The result must be a number.

12345 -> 54321 // Output must be a number  */

/*function reverseNum(number) {
  var reversed = 0;
  var isNegative = number < 0;
  if (isNegative) {
    number = number * -1;
  }

  while (number > 0) {
    var lastDigit = number % 10;             // second version

    reversed = reversed * 10 + lastDigit;
    number = number - lastDigit;
    number = number / 10;
  }
  return isNegative ? reversed : reversed * -1; // Ne prihvata zagrade (reversed * -1)
}
console.log(reverseNum(12345));*/

/*function reverseNum(number) {
  var result = 0,
    counter = 0;
  for (i = number; i !== 0; i = i / 10 - (i % 10) * 0.1) {
    counter = i % 10;
    result = result * 10 + counter;   // Third version
  }
  return result;
}
console.log(reverseNum(12345));*/

function reversesNumber(numb) {
  var result = 0;
  while (numb !== 0) {
    result *= 10; // 0 * 10, 5 * 10
    result += numb % 10; // 0 + 5, 50 + 4
    numb = numb - (numb % 10); //12340, 1230
    numb = numb / 10; // 1234, 123 ... 0.0
  }
  return result;
}
console.log(reversesNumber(-12345));
