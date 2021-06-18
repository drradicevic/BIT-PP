function Groccery(name, price) {
  this.name = name;
  this.price = price;
}

var apple = new Groccery("apple", 100);
console.log(apple);
var milk = new Groccery("milk", 80);
var bananas = new Groccery("bananas", 150);

var usualShoppingList = [apple, milk, bananas];
console.log(usualShoppingList);

function sumPrices() {
  var sum = 0;
  sum = apple.price + milk.price + bananas.price;
  return sum;
}
console.log(sumPrices(usualShoppingList));
