/*  10. Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A.  */

function calculates(string, lettera, letterA) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === lettera || string[i] === letterA) {
      count++;
    }
  }
  return count;
}
console.log(calculates("dragan RAdicevic", "a", "A"));
