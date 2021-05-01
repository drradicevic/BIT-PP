/* Write a function to count the number of letter occurrences in a string.
My random string; n ==>  2  */

function occurrences(string, letter) {
  var count = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      count++;
    }
  }
  return count;
}

console.log(occurrences("My random sting", "n"));
