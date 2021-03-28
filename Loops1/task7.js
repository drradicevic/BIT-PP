/*  Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade.

David 80
Marko 77
Dany 88
John 95
Thomas 68

The grades are computed as follows :

 60% F
 70% D
 80% C
 90% B
 100% A  */ /*    PITATI DARIA za varijablu unutat for loop-a  */

var students = [
  ["David", 80],
  ["Marko", 77],
  ["Dany", 88],
  ["John", 95],
  ["Thomas", 68],
];

var sum = 0;

for (i = 0; i < students.length; i++) {
  sum += students[i][1];
  var average = sum / students.length;
}
if (average >= 90 && average < 100) {
  console.log(average + " Final mark is A");
} else if (average >= 80 && average < 90) {
  console.log(average + " Final mark is B");
} else if (average >= 70 && average < 80) {
  console.log(average + " Final mark is C");
} else if (average >= 60 && average < 70) {
  console.log(average + " Final mark is D");
} else {
  console.log(average + " Final mark is F");
}
