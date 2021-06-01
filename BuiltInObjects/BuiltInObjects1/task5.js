/* 5.	
a.	Write a function that finds all the elements in a given array less than a given element. 
	Input: [2, 3, 8, -2, 11, 4], 6 
	Output: [2, 3, -2, 4]*/

function lessThanAGivenElement(array, num) {
  var output = [];
  array.forEach(function (el) {
    if (el < num) {
      output[output.length] = el;
    }
  });

  return output;
}
console.log(lessThanAGivenElement([2, 3, 8, -2, 11, 4], 6));

/* b.	Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
		Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
	Output: [’Programming’, ‘product’]*/

function findElements(array) {
  var result = [];
  array.forEach(function (element) {
    if (element.startsWith("Pro") || element.startsWith("pro")) {
      result[result.length] = element;
    }
  });
  return result;
}
var res = findElements([
  "JavaScript",
  "Programming",
  "fun",
  "product",
  "Profesor",
]);
console.log(res);
/*c.	Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it.  */
function expect(array, callback) {
  return array.filter(callback);
}
var callback = function (el) {
  return el % 2 === 0;
};
console.log(expect([2, 3, 8, -2, 11, 4], callback));
