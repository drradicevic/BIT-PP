/*  4.	Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2  */

var array = [4, 2, 2, -1, 6, -10];

function secondSmallest(array) {
  var minimum = array[0];
  var minimum2 = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i];
    }
  }
  for (var j = 0; j < array.length; j++) {
    if (array[j] < minimum2 && array[j] > minimum) {
      minimum2 = array[j];
    }
  }
  return minimum2;
}
console.log(secondSmallest(array));
