/*  3.	Write a program that checks if a given number is a three digit long number.   */

/* function checkNumber(number) {
  if (number >= 100 && number < 1000) {
    return number + " is a three digit long number";                //      PRVA VERZIJA
  } else { 
    return number + " is not a three digit long number";
  }
}

console.log(checkNumber(500));    */

function checking(number) {
  if (number >= 100 && number < 1000) {
    return "Number " + number + " is a three digit long number";
  } else if (number <= -100 && number > -1000) {
    return "Number " + number + " is a three digit long number"; //            DRUGA VERZIJA
  } else {
    return "Number " + number + " is not three digit long number";
  }
}
console.log(checking(100));
