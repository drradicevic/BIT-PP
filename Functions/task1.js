/*  1.	Write a program that calculates the maximum of two given numbers.  */

/*  function maximum(a, b) {
  if (a > b) {
    return a;
  } else {                                //   PRVA VERZIJA
    return b;
  }
}

result = maximum(15, 10);
console.log(result);  */

/*function maximum(a, b) {
  if (a > b) {
    return a;        
  } else if (a === b) {                      //   DRUGA VERZIJA
    return "Numbers are equal";
  } else {
    return b;
  }
}

result = maximum(12, 11);
console.log(result);    */

function max(number1, number2) {
  if (number1 > number2) {
    return "Number " + number1 + " is biger than number " + number2;
  } else if (number1 < number2) {
    return "Number " + number2 + " is biger than number " + number1; //                       TRECA VERZIJA
  } else {
    return "Number " + number1 + " and number " + number2 + " are equal";
  }
}
var calculates = max(9, 8);
console.log(calculates);
