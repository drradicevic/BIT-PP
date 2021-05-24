/* 4.	Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output:  { minValue: -2, minLastIndex: 6 }   */

function findMin(array) {
  var output = { minValue: array[0] };
  for (var i = 0; i < array.length; i++) {
    if (array[i] < output.minValue) {
      output.minValue = array[i];
    }
  }
  output.minLastIndex = array.lastIndexOf(output.minValue);

  return output;
}

console.log(findMin([1, 4, -2, 11, 8, 1, -2, 3]));
