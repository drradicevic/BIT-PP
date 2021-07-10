// 1.	Write a function that capitalizes the first letter of each string argument it receives.
// 	Function arguments: ['hello', 'there', 'ES', 6]
// 	Output: ['Hello', 'There', 'ES']

const capitalize = (array) => {
  let output = [];
  array.forEach((element) => {
    if (typeof element !== "number") {
      output.push(element[0].toUpperCase() + element.slice(1));
    }
  });
  return output;
};

const result = capitalize(["hello", "there", "ES", 6]);

console.log(result);
