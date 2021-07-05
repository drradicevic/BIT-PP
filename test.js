function f() {
  return function (a, b) {
    return a + b;
  };
}
var result = f(2, 3);
console.log(result);

/* Write a function to count the number of letter occurrences in a string.
My random string; n ==>  2  */

function someFunction(array, string) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (string === array[i]) {
      count += 1;
    }
  }
  return count;
}

var result = someFunction("My random string", "n");

console.log(result);

/* 2.	Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]    */

function multiples(array) {
  var output = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      output[output.length] = array[i] * 2;
    } else {
      output[output.length] = array[i];
    }
  }
  return output;
}
var result = multiples([-3, 11, 5, 3.4, -8]);
console.log(result);
