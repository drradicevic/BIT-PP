/* 2.	Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

[NaN, 0, 15, false, -22, '', undefined, 47, null] */

function joinElements(array) {
  var result = "";
  for (var i = 0; i < array.length; i++) {
    if (isFinite(array[i]) && array[i] !== null) {
      result += array[i];
    }
  }
  return result;
}

console.log(joinElements([NaN, 0, 15, false, -22, "", undefined, 47, null]));
