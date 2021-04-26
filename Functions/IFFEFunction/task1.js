/*1. Write IIFE that replaces the first and the last element of the given array and 
prints out its elements. 
Input array: [4, 5, 11, 9]
Output array: [ 9, 5, 11, 4]*/

var replacesFirstAndLastElement = (function (array) {
  var b = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = b;
  return array;
})([4, 5, 11, 9]);

console.log(replacesFirstAndLastElement);

// second version

var replacesFirstAndLastElement = (function (array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (i === 0) {
      result[result.length] = array[array.length - 1];
    } else if (i === array.length - 1) {
      result[result.length] = array[0];
    } else {
      result[result.length] = array[i];
    }
  }
  return result;
})([4, 5, 11, 9]);

console.log(replacesFirstAndLastElement);
