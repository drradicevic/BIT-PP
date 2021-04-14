/*  Write a program that calculates a number of float values in the array.
Input: [NaN, 23.1, 15, false, -22.5, "", 4, 7, null]
Output: 2   */

function numberOfInteger(array) {
  var conc = 0;
  var convert;
  for (var i = 0; i < array.length; i++) {
    convert = parseInt(array[i]);
    if (isFinite(convert) && parseFloat(array[i]) !== convert) {
      conc++;
    }
  }
  return conc;
}
console.log(numberOfInteger([NaN, 23.1, 15, false, -22.5, "", 4, 7, null]));
