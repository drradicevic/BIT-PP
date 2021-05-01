/*  7. Write a function to convert string into an array. Space in a string should be represented as
“null” in new array.
My random string  [M, y, null, r, a]
Random [R, a, n,d, o, m]  */

function convert(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] == " ") {
      result[result.length] = null;
    } else {
      result[result.length] = array[i];
    }
  }
  return result;
}

console.log(convert("My random string"));
