// 5.	Write a function that filters all the strings from the given array that contain substring JS or js.
// 	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
// 	Output: ['babel.js, 'JS standard']

const items = ["compiler", "transpiler", "babel.js", "JS standard", "linter"];
const output = (array) =>
  array.filter((a) => a.includes("JS") || a.includes("js"));
console.log(output(items));
