function someExercise(num1, num2) {
  var sum = num1 * num2;
  return sum;
}

function someFunctions(someExercise, num3) {
  return someExercise - num3;
}

var result = someFunctions(someExercise(5, 8), 20);
console.log(result);
