/* 4.	Write a program which prints the elements of the following array as a single string.

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];   */

var x = ["1", "A", "B", "c", "r", true, NaN, undefined];
var string = "";

//for (i in x) {
//  element += x[i] + "\n";
//}
//console.log(element);

//for (i in x) {
//  console.log(x[i]);
//}

for (i in x) {
  string = string + x[i];
}
console.log("String of elements in araay x is: " + string);
