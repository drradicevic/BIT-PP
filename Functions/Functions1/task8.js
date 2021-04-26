/*  8. Write a program that calculates a number of appearances of a given number in a given
array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3  */

function numberAppearance(array, number) {
  count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === number) {
      count = count + 1;
    }
  }

  return count;
}

console.log(numberAppearance([2, 4, 7, 8, 7, 7, 7, 1], 7));

/*   function appearances(array,element) {

  var brojac = 0; 

  for ( i=0;   i < array.length;  i++ ) {

          if ( element === array[i] ) 
            brojac = brojac +1; // 0 = 0 + 1  ---> dobiti vrednost 1   var brojac = 1; 
  }    
   return brojac
}



console.log(appearances ([3,3,3,4,4,4,4,4,4,5,5,3],3));
   */
