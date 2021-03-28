/*  2.	Write a program that checks if a given number is odd. */

/*function isOdd(number) {
  if (number % 2 === 0) {
    return "Number is even";
  } else {                                   //     PRVA VERZIJA
    return "Number is odd";
  }
}

console.log(isOdd(111));  */

function odd(number) {
  if (number % 2 === 1) {
    return "Number " + number + " is odd";
  } else {
    return "Number " + number + " is even"; //           DRUGA VERZIJA
  }
}

console.log(odd(9));
