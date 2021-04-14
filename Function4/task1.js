/* 1.	Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no  */

function check(array, number) {
  var result = "";
  for (var i = 0; i < array.length; i++) {
    if (array[i] === number) {
      result = "Yes";
      break;
    } else {
      result = "No";
    }
  }
  return result;
}
var a = [5, -4.2, 3, 7];
var e = 3;
console.log(check(a, e));
