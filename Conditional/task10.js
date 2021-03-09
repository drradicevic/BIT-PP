/*Write a JavaScript program to check a given integer is within 20 of 100 or 400,
and print range in which number belongs.
Sample Input: 13;        Sample Input: 34;                   Sample Input: 256
      Output: -               Output : 20 ⇔ 100                  Output : 100 ⇔ 400    */

var x = 22;
var value = " "

if ((x > 100) && (x < 400)) {
    value = "100 ⇔ 400"
} else if ((x > 20) && (x < 100)) {
    value = "20 ⇔ 100"
} else {
    value = "-"
}
console.log(value)