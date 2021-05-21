/* 2.	Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13]  */

function removesAllDuplicates(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
    var sortedArr = newArray.sort(function (a, b) {
      return a - b;
    });
  }
  return sortedArr;
}

console.log(removesAllDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

// function removeElement(array) {
//   var sortedArr = array;
//   array.sort(function (a, b) {
//     return a - b;
//   });

//   var newArr = [];

//   for (var i = 0; i < sortedArr.length; i++) {
//     if (!newArr.includes(array[i])) {
//       newArr.push(array[i]);
//     }
//   }

//   return newArr;
// }

// var input = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
// console.log(removeElement(input));
