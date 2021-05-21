/* window.navigator
Create a function that prints out in the console the following information
● the platform on which the browser is running
● the information about the browser version
● the company that created that browser
Each piece of information should be printed out in a new row.
Create new “isOnline” function that checks if the browser is online.
It should print out “online” when the browser is online and “offline” when there is
no Internet connection.

window.screen
Create a function that prints out the following information in the console:
● current browser width and height
● max possible browser height  */

function write() {
  var result = "Hello World from JS";
  console.log(result);
}
write();

function sum(num1, num2) {
  var result = num1 + num2;
  console.log(result);
}
sum(10, 15);

function getPlatform() {
  console.log("Platform: ", window.navigator.platform);
}
getPlatform();

function getInformationAboutBrowserVersion() {
  console.log(
    "Information about browser version: ",
    window.navigator.appCodeName
  );
}
getInformationAboutBrowserVersion();

function companyThatCreatedBrowser() {
  console.log("Company that created browser: ", window.navigator.mimeTypes);
}
companyThatCreatedBrowser(); // dovrsiti!
