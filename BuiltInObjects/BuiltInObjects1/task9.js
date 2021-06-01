/*9. Write a function that for a given departure and arrival time calculates the time the trip
  takes.
  Input: 8:22:13 11:43:22
  Output: 3 hours 21 minutes 9 seconds*/

var departure = "8:22:13";
var arrival = "11:43:22";

function trip(dep, arr) {
  var currentDep = new Date();
  var currentArr = new Date();
  dep = dep.split(":");
  arr = arr.split(":");
  currentDep.setUTCHours(parseInt(dep[0]));
  currentDep.setUTCMinutes(parseInt(dep[1]));
  currentDep.setUTCSeconds(parseInt(dep[2]));

  currentArr.setUTCHours(parseInt(arr[0]));
  currentArr.setUTCMinutes(parseInt(arr[1]));
  currentArr.setUTCSeconds(parseInt(arr[2]));
  var timeTravel = currentArr - currentDep;
  var h = Math.floor(timeTravel / (1000 * 3600));
  var m = Math.floor(timeTravel / (1000 * 60));
  m %= 60;
  var s = Math.floor(timeTravel / 1000);
  s %= 60;
  console.log(h + " hours " + m + " minutes " + s + " seconds ");
}
trip(departure, arrival);
