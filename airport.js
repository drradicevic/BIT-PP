"use strict";

function Person(name, surname) {
  if (!name || !surname) {
    throw new Error("This input is required!");
  }
  this.name = name;
  this.surname = surname;
  this.getData = function () {
    return this.name + " " + this.surname;
  };
}

function Seat(number, category) {
  number = number || Math.round(91 * Math.random() + 10);
  category = category || "e";
  if (!number) {
    throw new Error("This input is required!");
  }
  if (!["e", "b"].includes(category)) {
    throw new Error("Invalid category input!");
  }
  this.number = number;
  this.category = category;
  this.getData = function () {
    return this.number + ", " + this.category.toUpperCase();
  };
}

function Passenger(person, seat) {
  if (!person || !(person instanceof Person)) {
    throw new Error("Invalid input!");
  }
  if (!seat || !(seat instanceof Seat)) {
    throw new Error("Invalid input!");
  }
  this.person = person;
  this.seat = seat;
  this.getData = function () {
    return seat.getData() + ", " + person.getData();
  };
}

function Flight(relation, date) {
  if (!relation || !date) {
    throw new Error("This input is required!");
  }
  this.relation = relation;
  this.date = date;
  this.listOfPassengers = [];
  this.addPassenger = function (passenger) {
    if (!passenger || !(passenger instanceof Passenger)) {
      throw new Error("Invalid input");
    }
    this.listOfPassengers.push(passenger);
  };
  this.getData = function () {
    var result = this.date + ", " + this.relation + "\n";
    this.listOfPassengers.forEach(function (passenger) {
      result += "\t" + passenger.getData() + "\n";
    });
    return result;
  };
  this.numberOfPassenger = function () {
    return this.listOfPassengers.length;
  };
}

function Airport() {
  this.name = "Nikola Tesla";
  this.listOfFlights = [];
  this.addFlight = function (flight) {
    if (!flight || !(flight instanceof Flight)) {
      throw new Error("Invalid input");
    }
    this.listOfFlights.push(flight);
  };
  this.getTotalPassenger = function () {
    var count = 0;
    this.listOfFlights.forEach(function (flight) {
      count += flight.numberOfPassenger();
    });
    return count;
  };
  this.getData = function () {
    var result =
      "Airport: " +
      this.name +
      ", total passengers: " +
      this.getTotalPassenger() +
      "\n";
    this.listOfFlights.forEach(function (flight) {
      result += flight.getData();
    });
    return result;
  };
}
function createFlight(relation, date) {
  return new Flight(relation, date);
}

function createPassenger(name, surname, number, category) {
  var person = new Person(name, surname);
  var seat = new Seat(number, category);
  return new Passenger(person, seat);
}

var airport = new Airport();

var flight1 = createFlight("Belgrade - New York", "Oct 25 2017");
var flight2 = createFlight("Barcelona - Belgrade", "Nov 11 2017");
var passenger1 = createPassenger("John", "Snow", 1, "b");
var passenger2 = createPassenger("Cersei", "Lannister", 2, "b");
var passenger3 = createPassenger("Daenerys", "Targaryen", 14);
var passenger4 = createPassenger("Tyrion", "Lannister");

flight1.addPassenger(passenger1);
flight1.addPassenger(passenger2);

flight2.addPassenger(passenger3);
flight2.addPassenger(passenger4);

airport.addFlight(flight1);
airport.addFlight(flight2);

console.log(airport.getData());

// var person = new Person("Pera", "Peric");
// var seat = new Seat(12, "b");
// var passenger = new Passenger(person, seat);
// var flight = new Flight("Belgrade - New York", "Oct 15 2012");
// console.log(person.getData());

// console.log(seat.getData());

// console.log(passenger.getData());
// console.log(flight.getData());
