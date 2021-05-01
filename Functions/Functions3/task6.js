/* 6.	Write a function to create a specified number of elements with pre-filled numeric value array.

6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null] */

function createArray(number, element) {
  var array = [];
  if (element === undefined) {
    element = null;
  }
  for (var i = 0; i < number; i++) {
    array[i] = element;
  }
  return array;
}
console.log(createArray(5, "none"));

/*function createArray(number, element) {
  result = [];
  for (var i = 0; i < number; i++) {
    if (element === undefined) {
      element = null;
    }
    result[result.length] = element;          // second version
  }
  return result;
}

console.log(createArray(6, "none"));*/
