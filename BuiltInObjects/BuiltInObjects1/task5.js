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
	Output: [’Programming’, ‘product’]

c.	Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it.  */
