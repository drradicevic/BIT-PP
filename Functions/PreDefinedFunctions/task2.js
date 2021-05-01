/*  Write a program to join all elements of the array into a string skipping elements
that are undefined, null, NaN or Infinity.
Input: [NaN, 0, 15, false, -22, "", undefined, 47, null]
Output: “015false-2247”    */

function joinElements(array) {
  var string = "";
  for (var i = 0; i < array.length; i++) {
    if (isFinite(array[i]) && array[i] !== null) {
      string += array[i];
    }
  }
  return string;
}
console.log(joinElements([NaN, 0, 15, false, -22, "", undefined, 47, null]));
