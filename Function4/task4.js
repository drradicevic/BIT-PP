/*  4.	Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2  */

var array = [4, 2, 2, -1, 6, -10];

function secondSmallest(array) {
  var minimun = array[0];
  var minimun2 = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] < minimun) {
      minimun = array[i];
    }
  }
  for (var j = 0; j < array.length; j++) {
    if (array[j] < minimun2 && array[j] > minimun) {
      minimun2 = array[j];
    }
  }
  return minimun2;
}
console.log(secondSmallest(array));
