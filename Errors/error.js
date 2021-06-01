// try {
//   console.log(dragan);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// } finally {
//   console.log("1+1=2");
// }

var dragan = function () {
  var string = "pera";
  if (string !== "dragan") {
    throw new TypeError("error string");
  }
};

try {
  string();
} catch (error) {
  console.log(error.message);
}
