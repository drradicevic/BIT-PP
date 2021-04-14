/* 11. Write a function that converts an array of strings into an array of numbers. Filter out all
non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] --> [1, 21, 42, 1000]  */

function convertArrayOfString(array) {
  var result = [];
  var converted;

  for (var i = 0; i < array.length; i++) {
    converted = parseFloat(array[i]);
    if (isFinite(converted)) {
      result[result.length] = converted;
    }
  }
  return result;
}
console.log(
  convertArrayOfString(["1", "21", undefined, "42", "1e+3", Infinity])
);
