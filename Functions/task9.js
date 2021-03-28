/*  9. Write a program that calculates the sum of odd elements of a given array.    */

/*PRIMER SA NIZOM:  niz = [1, 2, 3, 4, 5, 6];
       result is 1 + 3 + 5 = 9;               */

/*function sumOddNumber(niz) {
  var sum = 0;

  for (var i = 0; i < niz.length; i++) {
    //                                                                PRIMER SA NIZOM
    if (niz[i] % 2 !== 0) {
      sum = sum + niz[i];
    }
  }
  return sum;
}
console.log(sumOddNumber([1, 2, 3, 4, 5, 6]));*/

//PRIMER SA arguments:  arguments = 1, 2, 3, 4, 5, 6;
//       result is 1 + 3 + 5 = 9;

function sumOddNumber() {
  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] % 2 !== 0) {
      //                                                             PRIMER SA ARGUMENTS
      sum = sum + arguments[i];
    }
  }
  return sum;
}
console.log(sumOddNumber(1, 2, 3, 4, 5, 6));
