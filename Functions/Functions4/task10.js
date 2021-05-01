/* 10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]  */

function insertsElement(element, position, array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (i === position) {
      result[result.length] = element;
      result[result.length] = array[i];
    } else {
      result[result.length] = array[i];
    }
  }
  return result;
}

console.log(insertsElement(78, 3, [2, -2, 33, 12, 5, 8]));
