/*  11. Write a program that concatenates a given string given number of times. For example, if
“abc” and 4 are given values, the program prints out abcabcabcabc.  
string = "abc"  
number = 4          
result = abcabcabcabc */

function concatenates(string, number) {
  var result = "";
  for (var i = 0; i < number; i++) {
    result += string;
  }

  return result;
}
console.log(concatenates("abc", 4));
