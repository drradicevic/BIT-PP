/* 7.	
a.	Write a function that checks if a given string is written in all capitals.
b.	Write a function that checks if a given string contains any digits.
c.	Write a function that checks if a given string is a valid hexadecimal color.
d.	Write a function that checks if a given number belongs to the interval from 1900 to 2018. 
e.	Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d). */

//a.
function isUpperCase(string) {
  var result = false;
  var temp = string.toUpperCase();

  for (var i = 0; i < string.length; i++) {
    if (string[i] === temp[i]) {
      result = true;
    }
  }
  return result;
}
console.log(isUpperCase("DRAGAN"));

//b.
function isDigit(string) {
  var result = false;
  for (var i = 0; i < string.length; i++) {
    if (!isNaN(parseInt(string[i]))) {
      result = true;
    }
  }
  return result;
}
console.log(isDigit("Drgagan"));
