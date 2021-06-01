/*12. Write a function that shuffles the elements of a given array.
  
  Input: [3, 6, 11, 2, 9, 1]
  Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array)*/

function shuffle(array) {
  array.forEach(function (el, i) {
    var randomIndex = parseInt(Math.random() * array.length);
    var p = array[randomIndex];
    array[randomIndex] = array[i];
    array[i] = p;
  });
  return array;
}

console.log(shuffle([3, 6, 11, 2, 9, 1]));
