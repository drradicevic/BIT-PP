function f() {
  return function (a, b) {
    return a + b;
  };
}
var result = f(2, 3);
console.log(result);
