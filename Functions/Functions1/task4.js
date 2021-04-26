/* 4. Write a program that calculates an arithmetic mean of four numbers.  */

/* function sredina() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i] / 4;
  }
  return sum;                                               //  PRVA I PROSTIJA VERZIJA
}

var result = sredina(10, 20, 30, 40);
console.log(result);                  */

function sredina() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  sum = sum / arguments.length; //                              DRUGA VERZIJA
  return sum;
}

var result = sredina(70, 20, 30, 40);
console.log(result);
