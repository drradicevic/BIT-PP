/*Write a JavaScript program to compute the sum of the two given integers. 
If the two values are same, then returns triple their sum.
Sample Input: 12,5 Sample Input: 8,8
Output : 17 Output : 48 */

var a = 8;
var b = 8;
var result = " "

if (a === b) {
    result = (a + b) * 3
} else {
    result = a + b
}
console.log(result)