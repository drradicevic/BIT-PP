/*2.	Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
Input: 4 5
Output: 20 
*/

var surface = (function (a, b) {
  var result = "a = " + a + ", b = " + b + ", surface = " + a * b;
  return result;
})(8, 9);

console.log(surface);
