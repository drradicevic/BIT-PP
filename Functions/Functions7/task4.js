/* 4.	It's hot out! Let's make a converter based on the steps here.

Create a function called celsiusToFahrenheit:
●	Store a celsius temperature into a variable.
●	Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:
●	Now store a fahrenheit temperature into a variable.
●	Convert it to celsius and output "NN°F is NN°C."  */

function celsiusToFahrenheit(celsiusDegrees) {
  var result = (celsiusDegrees * 9) / 5 + 32;
  return celsiusDegrees + "°C is " + result + "°F";
}
console.log(celsiusToFahrenheit(30));

function fahrenheitTocelsius(fahrenheitDegrees) {
  var result = ((fahrenheitDegrees - 32) * 5) / 9;
  return fahrenheitDegrees + "°F is " + result + "°C";
}
console.log(fahrenheitTocelsius(30));
