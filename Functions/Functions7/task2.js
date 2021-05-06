/*2.	You know how old your dog is in human years, but what about dog years? Calculate it!

Write a function named calculateDogAge that:
●	takes 1 argument: your puppy's age.
●	calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
●	outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.

Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years. */

function calculateDogAge(dogAge, humanAge) {
  var dogYears = dogAge * 7;
  var humanYears = humanAge * 7;
  return (
    "Your doggie is " +
    dogYears +
    " years old in dog years!" +
    "\n" +
    "You are " +
    humanYears +
    " old in dog years!"
  );
}
console.log(calculateDogAge(7, 26));
console.log(calculateDogAge(2, 43));
console.log(calculateDogAge(0.5, 25.5));
