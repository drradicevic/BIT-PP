/*  6. Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1.  */

function occurrence(string, letter) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] == letter) {
      count = i + 1;
      break;
    } else {
      count = -1;
    }
  }
  return count;
}
console.log(occurrence("My random string", "n"));
