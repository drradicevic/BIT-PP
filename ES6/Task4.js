// 4.	Write a function that filters all even elements of the array.
// 	Input: [6, 11, 9, 0, 3]
// 	Output: [6, 0]

// function increasesEachElement(array) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       newArray[newArray.length] = array[i];
//     }
//   }
//   return newArray;
// }

// let result = increasesEachElement([6, 11, 9, 0, 3]);

// console.log(result);

let input = [6, 11, 9, 0, 3];
let getEvenNumbers = (arr) => arr.filter((number) => number % 2 == 0);
console.log(getEvenNumbers(input));
