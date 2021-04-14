/* 10. Write a function to get the first n characters and add “...” at the end of newly created string.  */

function nCharacters(string, num) {
  var result = "";
  var add = "...";
  for (i = 0; i < num; i++) {
    result += string[i];
  }
  result += add;

  return result;
}
console.log(nCharacters("My random string", 5));
