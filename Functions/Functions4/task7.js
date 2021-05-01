/* 7. Write a program that intertwines two arrays. You can assume the arrays are of the same length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]   */

function intertwinesTwoArrays(array1, array2) {
  var result = [];
  var index1 = 0;
  var index2 = 1;
  for (var i = 0; i < array1.length; i++) {
    result[index1] = array1[i];
    index1 = index1 + 2;
  }
  for (j = 0; j < array2.length; j++) {
    result[index2] = array2[j];
    index2 = index2 + 2;
  }
  return result;
}

console.log(intertwinesTwoArrays([4, 5, 6, 2], [3, 8, 11, 9]));
