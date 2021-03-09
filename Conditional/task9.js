/*Write a JavaScript program to check two given numbers and print “true” if one of
the number is 50 or if their sum is 50. 
Sample Input: 5, 54 Sample Input: 6,50 Sample Input: 40,10
     Output : -          Output : true      Output : true */

var a = 40;
var b = 100;
var result = " "

if ((a === 50) || (b === 50) || ((a + b) === 50)) {
    result = "True"
} else {
    result = "-"
}
console.log(result)