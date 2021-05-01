/* 5.	Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]    */

function getTheLastElements(array, numberOfLastElements) {
  var result = [];
  if (numberOfLastElements === undefined) {
    numberOfLastElements = 1;
  }
  for (var i = array.length - numberOfLastElements; i < array.length; i++) {
    result[result.length] = array[i];
  }
  return result;
}
console.log(getTheLastElements([7, 9, 0, -2], 2));
