// 6.	Write a function that filters all integer numbers from the given array.
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
// Output: [7, 8]

const str = [1.6, 11.34, 9.23, 7, 3.11, 8];
const filteredNumbers = (num) =>
  num.filter((item) => parseInt(item) == item).map((item) => parseInt(item));
console.log(filteredNumbers(str));
