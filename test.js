function f() {
  return function (a, b) {
    return a + b;
  };
}
var result = f(2, 3);
console.log(result);

/* Write a function to count the number of letter occurrences in a string.
My random string; n ==>  2  */

function someFunction(array, string) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (string === array[i]) {
      count += 1;
    }
  }
  return count;
}

var result = someFunction("My random string", "n");

console.log(result);
