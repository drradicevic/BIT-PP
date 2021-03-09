/*Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, -1, 4
        Output : 4, 0, -1  */

var a = 2;
var b = 11;
var c = 4;

if ((a > b) && (a > c) && (b > c)) {
    console.log(a, b, c);
} else if ((a > c) && (a > b) && (c > b)) {
    console.log(a, c, b);
} else if ((b > a) && (b > c) && (a > c)) {
    console.log(b, a, c);
} else if ((b > c) && (b > a) && (c > a)) {
    console.log(b, c, a);
} else if ((c > a) && (c > b) && (a > b)) {
    console.log(c, a, b);
} else {
    console.log() = c, b, a
}