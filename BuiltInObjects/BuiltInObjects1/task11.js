/*11.
  a. Write a function that generates a random integer value between 5 and 20.*/

function randomInteger(min, max) {
  return (max - min) * Math.random() + min;
}

console.log(randomInteger(5, 20));

/*b. Write a function that generates a random integer value between 50 and 100.*/
var result1 = randomInteger(50, 100);
console.log(result1);

/*c. Write a function which expects a number and a callback generator function and
  returns an array of numbers produced by the generator function.*/

function arrayOfRandoms(numb, func) {
  var arr = [];
  for (var i = 0; i < numb; i++) {
    arr[i] = func(i + 1, 10 * (i + 1));
  }
  return arr;
}
console.log(arrayOfRandoms(7, randomInteger));
