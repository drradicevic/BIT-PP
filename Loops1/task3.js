/*  3.	Write a program to compute the sum and product of an array of integers.  */

var array = [1, 2, 3];
var sum = 0;
var product = 1;

for (i = 0; i < array.length; i++) {
  sum += array[i];
  product *= array[i];
}
console.log("Sum numbers in array is: " + sum);
console.log("Product numbers in array is: " + product);
