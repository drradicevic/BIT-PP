/* 1. Write a function that converts an array of strings into an array of numbers. Filter
out all non-numeric values.
Input: [&quot;1&quot;, &quot;21&quot;, undefined, &quot;42&quot;, &quot;1e+3&quot;, Infinity]
Output: [1, 21, 42, 1000] */

function converts(array) {
  var result = [];
  var convert;
  for (var i = 0; i < array.length; i++) {
    convert = parseFloat(array[i]);
    if (isFinite(convert)) {
      result[result.length] = convert;
    }
  }
  return result;
}
console.log(converts([1, 21, undefined, 42, 1e3, Infinity]));
