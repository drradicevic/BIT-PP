/* 11.	Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true  */

function palindrome(string) {
  for (var i = 0, j = string.length - 1; i < j; i++, j--) {
    if (string[i] === " ") {
      string[i] = string[i + 1];
      i++;
    }
    if (string[j] === " ") {
      string[j] = string[j - 1];
      j--;
    }
    if (string[i] !== string[j]) {
      return false;
    }
  }
  return true;
}
console.log(palindrome("a nut for a jar of tuna"));
