var a = [4, 5, 11, 9];

(function () {
  var b = a[0];
  a[0] = a[a.length - 1];
  a[a.length - 1] = b;
  console.log(a);
})();
