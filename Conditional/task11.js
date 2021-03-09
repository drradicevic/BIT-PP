/*Write a program to check if the number is divisible by 2. 
If it is, print even, if not, print odd. 
Sample numbers: 3, 4, 9 (check one at the time)
Output: odd, even, odd */

var num = 9;
var result = " ";

if (num % 2 === 0) {
    result = "Number " + num + " is even"
} else {
    result = "Number " + num + " is odd"
}
console.log(result)