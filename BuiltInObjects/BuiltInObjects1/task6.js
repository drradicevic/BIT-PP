/*6.	
a.	Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
	[
{name: ‘apples’, price: 100}, 
{name: ‘milk’, price: 80}, 
{name:’bananas’, price: 150}
]
b.	Write a function that calculates the total price of your shopping list. 
c.	Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 
d.	Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. */

var shoppingBag = [
  { name: "apples", price: 100 },
  { name: "milk", price: 80 },
  { name: "bananas", price: 150 },
];

// b.

function totalPrice(array) {
  var sum = 0;
  array.forEach(function (element) {
    sum += element.price;
  });
  return sum;
}

console.log(totalPrice(shoppingBag));

//c.

function averagePrice(array) {
  var sum = 0;
  var average = 0;
  array.forEach(function (element) {
    sum += element.price;
  });
  average = sum / array.length;
  return average.toFixed(3);
}

console.log(averagePrice(shoppingBag));

// d.

function mostExpensive(array) {
  var price = shoppingBag[0].price;
  var index = 0;
  array.forEach(function (element, i) {
    if (element.price > price) {
      price = element.price;
      index = i;
    }
  });
  return shoppingBag[index].name.toUpperCase();
}

console.log(mostExpensive(shoppingBag));
