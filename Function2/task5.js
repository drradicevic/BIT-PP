/*  5. Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1.  */

function occurrence(string, letter) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] == letter) {
      count = i;
      break;
    } else {
      count = -1;
    }
  }
  return count;
}
console.log(occurrence("My random string", "n"));
