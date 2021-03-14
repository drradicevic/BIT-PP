/*   Write a program that takes as input a city name and outputs the country where the city is.
You may choose which cities and countries you want to output yourself, however there has
to be at least 5 countries and 15 cities. Note that each country must have a different
number of cities. Input different from the listed cities should output a message&quot;Please
choose a different city&quot;.   */

var city = "New York";
var result = " ";

switch (city) {
  case "Beograd":
  case "Nis":
  case "Novi Sad":
    result = "City in Serbia";
    break;
  case "Paris":
  case "Lyon":
  case "Nice":
  case "Lille":
    result = "City in France";
    break;
  case "Berlin":
  case "Hamburg":
  case "Stuttgart":
  case "Bremen":
  case "Hanover":
    result = "City in Germany";
    break;
  case "New York":
  case "Chicago":
  case "California":
    result = "City in United States";
    break;
  default:
    result = "Please choose a different city";
    break;
}
console.log(result);
