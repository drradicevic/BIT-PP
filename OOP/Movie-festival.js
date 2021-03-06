"use strict";

function Genre(name) {
  if (!name) {
    throw new Error("This field is required!");
  }
  this.name = name;

  this.getData = function () {
    /*  'Action' -> AN
        'Drama' -> DA
        'Comedy' -> CY  */

    return (
      this.name.charAt().toUpperCase() +
      this.name.charAt(name.length - 1).toUpperCase()
    );
  };
}

function Movie(title, genre, length) {
  if (!title || !length) {
    throw new Error("This field is required!");
  }
  if (!genre || !(genre instanceof Genre)) {
    throw new Error("Invalid input");
  }

  this.title = title;
  this.genre = genre;
  this.length = length;

  this.getData = function () {
    /*The Shawshank Redemption, 130min, AN*/

    return this.title + ", " + this.length + "min, " + this.genre.getData();
  };
}

function Program(date) {
  if (!date) {
    throw new Error("This field is required!");
  }
  this.date = new Date(date);
  this.day = this.date.getDate();
  this.month = this.date.getMonth() + 1;
  this.year = this.date.getFullYear();
  this.listOfMovies = [];

  this.addMovie = function (movie) {
    if (!movie || !(movie instanceof Movie)) {
      throw new Error("Invalid input.");
    }
    this.listOfMovies.push(movie);
  };

  this.totalLengthofMovies = function () {
    var count = 0;
    this.listOfMovies.forEach(function (movie) {
      count += movie.length;
    });
    return count;
  };
  this.totalNumOfMovies = function () {
    return this.listOfMovies.length;
  };

  this.getData = function () {
    /*Date, program length from all movies
        First movie title, length and genre
        Second movie title, length and genre
        Third movie title, length and genre
        Fourth movie name and length and genre*/

    var final =
      this.day +
      "." +
      this.month +
      "." +
      this.year +
      ", program duration " +
      this.totalLengthofMovies() +
      "min" +
      "\n";

    this.listOfMovies.forEach(function (movie) {
      final += "\t" + movie.getData() + "\n";
    });
    return final;
  };
}

function Festival(name) {
  //and number of movies in all programs
  if (!name) {
    throw new Error("This field is required!");
  }
  this.name = name;
  this.listOfPrograms = [];

  this.addProgram = function (program) {
    if (!program || !(program instanceof Program)) {
      throw new Error("Invalid input.");
    }
    this.listOfPrograms.push(program);
  };

  this.numOfMovies = function () {
    var count = 0;
    this.listOfPrograms.forEach(function (program) {
      count += program.totalNumOfMovies();
    });
    return count;
  };
  this.getData = function () {
    /*Weekend festival has 4 movie titles
        28.10.2017, program duration 368min
        Spider-Man: Homecoming, 133min, AN
        War for the Planet of the Apes, 140min, DA
        The Dark Tower, 95min, WN
        29.10.2017, program duration 108min
        Deadpool, 108min, CY*/

    var final = this.name + " has " + this.numOfMovies() + " movie titles\n";

    this.listOfPrograms.forEach(function (program) {
      final += program.getData();
    });
    return final;
  };
}

function createMovie(title, genre, length) {
  var movieGenre = new Genre(genre);

  return new Movie(title, movieGenre, length);
}

function createProgram(date) {
  return new Program(date);
}

var festival = new Festival("Weekend festival");

var program1 = createProgram("20 Aug 2021");
var program2 = createProgram("21 Aug 2021");

var movie1 = createMovie("Gladiator", "trailer", 105);
var movie2 = createMovie("Titanik", "drama", 119);
var movie3 = createMovie("Spiderman", "action", 93);
var movie4 = createMovie("Watherman", "action", 101);

program1.addMovie(movie1);
program1.addMovie(movie2);
program2.addMovie(movie3);
program2.addMovie(movie4);

festival.addProgram(program1);
festival.addProgram(program2);

console.log(festival.getData());
