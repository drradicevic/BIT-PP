/*  3.	Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3    */

function minimum(array) {
  var result = "";
  var minNum = array[0];
  var index = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] < minNum) {
      minNum = array[i];
      index = i;
    }
  }
  return (result =
    minNum + " is the minimum number of array, and his index is " + index);
}
console.log(minimum([4, 2, 2, -1, 6]));
