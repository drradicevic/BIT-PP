/* 7.	Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

Output: AnStJoJoDaMa */

function someFunction(array) {
  var result = "";
  var string = "";
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "string" && array[i].length >= 2) {
      string = array[i];
      result += string[0] + string[1];
    }
  }
  return result;
}

console.log(
  someFunction([
    "M",
    "Anne",
    12,
    "Steve",
    "Joe",
    "John",
    "David",
    "Mark",
    true,
    "A",
  ])
);
