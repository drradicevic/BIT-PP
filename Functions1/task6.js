/*  6.	Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
 * * * * *
 * * *
 * * * * * * *    */

/* function chart(x, y, z) {
  var star = "";
  for (var i = 0; i < x; i++) {
    star += "*";
  }
  star += "\n";
  for (var i = 0; i < y; i++) {
    star += "*";
  }
  star += "\n";
  for (var i = 0; i < z; i++) {
    star += "*";
  }
  return star;
}
console.log(chart(5, 3, 7));  */

function draws() {
  var stars = "";
  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i]; j++) {
      stars += "*";
    }
    stars += "\n";
  }
  return stars;
}
console.log(draws(1, 2, 3, 4, 5, 6, 7));
