/* 10.	Write a program to find the most frequent item of an array.

[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3] */

/*function mostFrequent(array) {
  var result = "";
  var counter = 0;
  var counterMain = 0;
  var item = "";
  var mainItem = "";
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        counter++;
        item = array[i];
      }
    }
    if (counter > counterMain) {
      counterMain = counter;
      mainItem = item;             // Second version
    }
    counter = 0;
  }
  return (result +=
    "Most frequent item of this array is '" +
    mainItem +
    "' and it appears " +
    counterMain +
    " times!");
}

console.log(mostFrequent([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));*/

function mostFreequent(array) {
  var result;
  var max = 0;
  var mostfreq = 0;

  for (i = 0; i < array.length; i++) {
    for (j = i; j < array.length; j++) {
      if (array[i] == array[j]) {
        max++;
      }
      if (mostfreq < max) {
        mostfreq = max;
        result = array[i];
      }
    }
    max = 0;
  }
  return "Item " + result + " repeats " + mostfreq + " times.";
}
console.log(mostFreequent([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));
