/*Write a program to check if the number is divisible by 2. 
If it is, print even, if not, print odd. 
Sample numbers: 3, 4, 9 (check one at the time)
Output: odd, even, odd */

var x = 12, y = 4, z = 9;
var result = " ";

if (x % 2 === 0) {
    result += "Number " + x + " is even\n"
} else {
    result += "Number " + x + " is odd\n"
}
if (y % 2 === 0) {
    result += "Number " + y + " is even\n"
} else {
    result += "Number " + y + " is odd\n"
}
if (z % 2 === 0) {
    result += "Number " + z + " is even\n"
} else {
    result += "Number " + z + " is odd\n"
}
console.log(result)