/* 1.	Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]   */

function diplicateArrayElements(array) {
  var newArray = [];
  array.forEach(function (elementl) {
    newArray.push(elementl, elementl);
  });
  return newArray;
}

console.log(diplicateArrayElements([2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]));
