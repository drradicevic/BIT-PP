/*3.	Write a program to filter out falsy values from the array.

[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47] */

function joinElements(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      result[result.length] = array[i];
    }
  }
  return result;
}

console.log(joinElements([NaN, 0, 15, false, -22, "", undefined, 47, null]));

/* function joinElements(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (parseFloat(array[i])) {
      result[result.length] = array[i];   // second version
    }
  }
  return result;
}

console.log(joinElements([NaN, 0, 15, false, -22, "", undefined, 47, null])); */
