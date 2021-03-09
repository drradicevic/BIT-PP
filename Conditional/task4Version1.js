/*Write a program to check if the variable is a number. 
If it’s a number, check if it is divisible by 2. 
If it is, print the result, if not, show “X”
Sample numbers: 10 | 7 (check one at the time)
Output: 10 / 2 = 5 | X */

var a = 6;

if ((typeof a === "number") && (a % 2 === 0)) {
    console.log(a / 2)
} else {
    console.log("X")
}