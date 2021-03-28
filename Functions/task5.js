/*  5.	Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw:
 *****
 *    *
 *    *
 *    *
 *****               */

function drawsASquare(number) {
  var square = "";
  for (var i = 0; i < number; i++) {
    for (var j = 0; j < number; j++) {
      if (i === 0 || i === number - 1) {
        square += "* ";
      } else if (j === 0 || j === number - 1) {
        square += "* ";
      } else {
        square += "  ";
      }
    }
    square += "\n";
  }
  return square;
}
console.log(drawsASquare(5));
