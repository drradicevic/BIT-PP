"use strict";

function Product(name, price, expDate) {
  if (!name || !price || !expDate) {
    throw new Error("This field is required");
  }
  this.productId = Math.round(Math.random().toFixed(5) * 100000);
  this.name = name;
  this.price = price.toFixed(3);
  this.expDate = new Date(expDate);
  this.shortName = function () {
    return (
      this.name.charAt().toUpperCase() +
      this.name.charAt(name.length - 1).toUpperCase()
    );
  };

  this.getInfo = function () {
    return (
      this.shortName() + this.productId + ", " + this.name + ", " + this.price
    );
  };
}

function ShoppingBag() {
  this.listOfProducts = [];
}

var product1 = new Product("banana", 145, "oct 15 2020");
console.log(product1.getInfo());
