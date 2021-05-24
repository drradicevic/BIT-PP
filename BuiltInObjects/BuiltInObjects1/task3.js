/* 3.	
a.	Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true*/

function isOdd(array) {
  var result = false;
  var oddNumber = array.filter(function (number) {
    if (number % 2 !== 0) {
      result = true;
    }
  });

  return result;
}
console.log(isOdd([1, 2, 9, 2, 1]));

/*b.	Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4   */

function countElement(array) {
  var result = 0;
  var mid;
  if (array.length % 2 === 0) {
    result = "Error";
  }

  for (var i = 0; i < array.length; i++) {
    if (array.length % 2 === 1) {
      mid = array[parseInt(array.length / 2)]; // Postupak za pronalazenje srednjeg elementa niza, ako je niz NEPARAN! Tako sto u index array-a stavimo parseInt...
    }
  }
  for (var i = 0; i < array.length; i++) {
    if (array[i] < mid) {
      result++;
    }
  }
  return result;
}

console.log(countElement([-1, 8.1, 3, 6, 2.3, 44, 2.11]));
