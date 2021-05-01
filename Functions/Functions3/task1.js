/* 1.	Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"
 */

function insert(sentence, word, position) {
  var newString = "";
  position = position || 0;
  for (var i = 0; i < sentence.length; i++) {
    var currentChar = sentence[i];
    if (i === position) {
      newString += word;
    }
    newString += currentChar;
  }
  return newString;
}
var result = insert("My random string", "JS ", 10);
console.log(result);
