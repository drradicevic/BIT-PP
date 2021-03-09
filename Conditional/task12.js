/*Write a program to check if the number is divisible by 3 and 5.
If it is, print that number. */

var number = 15;
var result = " ";

if (number % 3 === 0 && number % 5 === 0) {
    result = "Number " + number + " is divisible by 3 and 5"
} else if (number % 3 === 0) {
    result = "Number " + number + " is divisible by 3 but not divisible by 5"
} else if (number % 5 === 0) {
    result = "Number " + number + " is divisible by 5 but not divisible by 3"
} else {
    result = "Number " + number + " is not divisible by 3 and by 5"
}
console.log(result)