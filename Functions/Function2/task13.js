/*  13.	Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
  1 -> 1st
  11 -> 11th   */

/*var a = 103;

function humanize(a) {
  var result = "";

  if (a % 100 >= 11 && a % 100 <= 13) {
    result = a + "th";
  } else if (a % 10 === 1) {
    result = a + "st";
  } else if (a % 10 === 2) {
    result = a + "nd";                     
  } else if (a % 10 === 3) {
    result = a + "rd";
  } else {
    result = a + "th";
  }

  return result;
}

var func = humanize(a);
console.log(func);*/

function humanizeNumber(number) {
  var result;
  if (number % 10 === 1 && number !== 11) {
    result = number + "st";
  } else if (number % 10 === 2 && number !== 12) {
    result = number + "nd";
  } else if (number % 10 === 3 && number !== 13) {
    result = number + "rd";
  } else {
    result = number + "th";
  }
  return result;
}

var a = 103;
console.log(humanizeNumber(a));
