function punishment(text, number) {
  var result = "";
  for (i = 0; i <= number; i++) {
    result += i + ") " + text;
    result += "\n";
  }
  return result;
}

var punish = punishment("Punishment", 10);

console.log(punish);
