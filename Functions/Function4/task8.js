/* 8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]  */

function concatenateTwoArrays(array1, array2) {
  var result = [];
  for (var i = 0; i < array1.length; i++) {
    result[result.length] = array1[i];
  }
  for (var j = 0; j < array2.length; j++) {
    result[result.length] = array2[j];
  }
  return result;
}

console.log(concatenateTwoArrays([4, 5, 6, 2], [3, 8, 11, 9]));
