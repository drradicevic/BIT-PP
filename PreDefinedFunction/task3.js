/*  Write a program to filter out falsy values from the array.
Input: [NaN, 0, 15, false, -22, "", undefined, 47, null]
Output: [15, -22, 47]   */

function filter(array) {
  var outputArray = [];

  for (var i = 0; i < array.length; i++) {
    if (parseInt(array[i])) {
      outputArray[outputArray.length] = array[i];
    }
  }
  return outputArray;
}
console.log(filter([NaN, 0, 15, false, -22, " ", undefined, 47, null]));
