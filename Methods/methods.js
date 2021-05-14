//FILTER

/*
var someArray = [-12, 33 - 44, -33, 333, 55];
var positiveElements = someArray.filter(function (el) {
  return el % 2 === 0;
});

console.log(someArray);
console.log(positiveElements);

var someArray = [-12, 33 - 44, -33, 333, 55];
var positiveElements = someArray.filter(function (el) {
  return el > 0;
});

console.log(someArray);
console.log(positiveElements); 
*/

//INCLUDES

/* 
var someArray = [12, 33, 44, 33];
if (someArray.includes(44)) {
  console.log("Postoji");
} else {
  console.log("Ne postoji");
}
*/

//INDEXOF

/*
var someArray = [12, 33, 44, 333];
var index = someArray.indexOf(333);
console.log(index);

var someArray = [12, 33, 44, 333];
if (someArray.indexOf(33) !== -1) {
  console.log("Postoji");
} else {
  console.log("Ne postoji");
}
*/

//MAP
/*
var someArray = [12, 33, 44, 333];
var mappedArray = someArray.map(function (number) {
  return number + 100;
});
console.log(someArray);
console.log(mappedArray);
*/

//POP throws out last element of array
/*
var someArray = [12, 33, 44, 333];
var deletedElement = someArray.pop();
console.log(someArray);
console.log(deletedElement);
*/

//UNSHIFT
/*
var someArray = [12, 33, 44, 333];
var newLength = someArray.unshift(50, 41);
console.log(someArray);
console.log(newLength);
*/

//SHIFT deletes first element and returns deleted element
/*
var someArray = [12, 33, 44];

var deletedElement = someArray.shift();

console.log(someArray);
console.log(deletedElement);
*/

//SLICE
/*
var someArray = [12, 33, 44, 333];
var chopped = someArray.slice(1, 3);
console.log(someArray);
console.log(chopped);
*/

//PUSH adds elements on end of array - PUSH is built-in method on array    PUSH returns new array lenght if called
/*
var someArray = [12, 33, 44];

var newLenght = someArray.push(100);

console.log(someArray);
console.log(newLenght);
*/
