/*   9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]  */

function deleteElement(array, number) {
  result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] != number) {
      result[result.length] = array[i];
    }
  }

  return result;
}
console.log(deleteElement([4, 6, 2, 8, 2, 2], 2));
