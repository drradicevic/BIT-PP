/* 7. Write a function that filters elements of the given array so that they satisfy a
condition given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3] */

var oddElements = (function (array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      result[result.length] = array[i];
    }
  }
  return result;
})([2, 8, 11, 4, 9, 3]);

console.log(oddElements);
