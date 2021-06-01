/*8. Write a function that calculates a number of days to your birthday.
  
  Input: 25 February
  Output: 5 days*/

var date1 = new Date();
var date2 = new Date("04/08/2022");

var differenceInTime = date2.getTime() - date1.getTime();
var differenceInDay = Math.floor(differenceInTime / (1000 * 3600 * 24));

console.log(differenceInDay);
