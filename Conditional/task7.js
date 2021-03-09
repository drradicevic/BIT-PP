/*Write a JavaScript program to get the difference between a given number and 13, if
the number is greater than 13 return double difference between that number and 13.
Sample Input: 11 Sample Input: 32
Output : 2 Output : 38 */

var a = 21;
var b = 13;
var result = " "

if (a > b) {
    result = a - b
} else {
    result = (b - a) * 2
}
console.log(result)