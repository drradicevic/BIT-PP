function Person(name, lastName) {
  if (!name) {
    throw new Error("This input is required!");
  }
  if (!lastName) {
    throw new Error("This input is required!");
  }
  this.name = name;
  this.lastName = lastName;

  this.getData = function () {
    return `${this.name} ${this.lastName}`;
  };
}

function Seat(number = Math.floor(91 * Math.random() + 10), category = "e") {
  if (!["e", "b"].includes(category)) {
    throw new Error("This input is required!");
  }

  this.number = number;
  this.category = category;
  this.getData = function () {
    return `${this.number}, ${this.category.toUpperCase()}`;
  };
}

function Passenger(person, seat) {
  if (!person || !(person instanceof Person)) {
    throw new Error("Invalid person input");
  }
  if (!seat || !(seat instanceof Seat)) {
    throw new Error("Invalid person input");
  }
  this.person = person;
  this.seat = seat;

  this.getData = function () {
    return `Passenger: ${this.person.getData()}, has return card for: ${this.seat.getData()}`;
  };
}

let person = new Person("Dragan", "Radicevic");
console.log(person.getData());

let seat = new Seat(25, "b");
console.log(seat.getData());

let passenger = new Passenger(person, seat);

console.log(passenger.getData());
