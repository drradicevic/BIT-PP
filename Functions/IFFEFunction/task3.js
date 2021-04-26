/* 3. Write IIFE that replaces all appearances of the letters m or M with * and returns
the number of replacements.
Input: prograMming
Output: progra**ing, 2 */

var replacesAllLettersMOrm = (function (string) {
  var output = [];
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "m" || string[i] === "M") {
      output += "*";
      count++;
    } else {
      output += string[i];
    }
  }
  return [output, count];
})("prograMming");

console.log(replacesAllLettersMOrm);
