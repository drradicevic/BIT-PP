"use strict";
var CONTINETS = Object.freeze({
  EUROPE: "EU",
  ASIA: "AS",
  AFRICA: "AF",
  SOUTHAMERICA: "SA",
  NORTHAMERICA: "NA",
  AUSTRALIA: "AU",
});
function Country(name, odds, continent) {
  if (!name || !odds || !continent) {
    throw new Error("This field is required!");
  }
  if (!["EU", "AS", "AF", "SA", "NA", "AU"].includes(continent)) {
    throw new Error("Invalid input");
  }
  this.name = name;
  this.odds = odds;
  this.continent = continent;
}
function Person(name, surname, dateOfBirth) {
  if (!name || !surname || !dateOfBirth) {
    throw new Error("This field is required!");
  }
  this.name = name;
  this.surname = surname;
  this.dateOfBirth = dateOfBirth;
  /*this.day = this.dateOfBirth.getDate();
    this.month = this.dateOfBirth.getMonth();
    this.year = this.dateOfBirth.getFullYear();*/
  this.getData = function () {
    return (
      this.name + " " + this.surname
    ); /*' ' + this.day + '.' + this.month + '.' + this.year*/
  };
}
function Player(person, betAmount, country) {
  if (!person || !(person instanceof Person)) {
    throw new Error("Invalid input");
  }
  if (!country || !(country instanceof Country)) {
    throw new Error("Invalid input");
  }
  if (!betAmount) {
    throw new Error("Invalid input");
  }
  this.person = person;
  this.betAmount = betAmount;
  this.country = country;
}
function Address(country, city, postalCode, street, number) {
  if (!country || !(country instanceof Country)) {
    throw new Error("Invalid input");
  }
  if (!city || !postalCode || !street || !number) {
    throw new Error("This field is required!");
  }
  this.country = country;
  this.city = city;
  this.postalCode = postalCode;
  this.street = street;
  this.number = number;
}
function BettingPlace(address) {
  if (!address || !(address instanceof Address)) {
    throw new Error("Invalid input");
  }
  this.address = address;
  this.listOfPlayers = [];
  this.addPlayer = function (player) {
    if (!player || !(player instanceof Player)) {
      throw new Error("Invalid input");
    }
    this.listOfPlayers.push(player);
  };
  this.numberOfPlayers = function () {
    return this.listOfPlayers.length;
  };
}
function BettingHouse(competition) {
  if (!competition) {
    throw new Error("This field is required!"); //DOVRSITI
  }
  this.competition = competition;
  this.listOfBettingPlaces = [];
  this.addBettingPlace = function (bettingplace) {
    if (!bettingplace || !(bettingplace instanceof BettingPlace)) {
      throw new Error("Invalid input");
    }
    this.listOfBettingPlaces.push(bettingplace);
  };
  this.totalNumberOfPlayers = function () {
    var count = 0;
    this.listOfBettingPlaces.forEach(function (bettingplace) {
      count += bettingplace.numberOfPlayers();
    });
  };
}
var serbia = new Country("Serbia", 1.5, CONTINETS.ASIA);
var pera = new Person("Pera", "Peric", "21 Oct 2009");
var igrac = new Player(pera, 200, serbia);
var adresa = new Address(serbia, "Belgrade", 222, "Nemanjina", 4);
var malaKladionica = new BettingPlace(adresa);
var takmicenje = new BettingHouse("Football World Cup Winner");
console.log(takmicenje);
