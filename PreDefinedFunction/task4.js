/* 4. Write a program that calculates a number of integer values in the array.
Input: [NaN, 23.1, 15, false, -22.5, "", 4, 7, null]
Output: 3   */

function numberOfInteger(array) {
  var conc = 0;

  for (var i = 0; i < array.length; i++) {
    if (parseInt(array[i]) === array[i]) {
      conc++;
    }
  }
  return conc;
}
console.log(numberOfInteger([NaN, 23.1, 15, false, -22.5, "", 4, 7, null]));
