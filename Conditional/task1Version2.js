/*Write a conditional statement to find the sign of product of three numbers. 
Display the result in the console with the specified sign.
Sample numbers: 3, -7, 2
Output: The sign is - */

var x = 3;
var y = -7;
var z = 2;
var prodact = " ";

if ((x * y * z) > 0) {
    prodact = "The sing is +"
} else {
    prodact = "The sing is -"
}
console.log(prodact)
