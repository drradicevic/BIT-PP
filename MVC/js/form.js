var titleField = document.querySelector("#title");
var lengthField = document.querySelector("#length");
var genreOption = document.querySelector("#genre");
var movieBtn = document.querySelector("#create-movie");
var movieList = document.querySelector("#movie-list");
var dateField = document.querySelector("#date");
var programBtn = document.querySelector("#create-program");
var programList = document.querySelector("#program-list");

function createMovie() {
  var titleValue = titleField.value;
  var lengthValue = lengthField.value;
  var genreValue = genreOption.value;
  if (titleValue && lengthValue && genreValue) {
    var movie = new Movie(titleValue, lengthValue, genreValue);
    var movieListItem = document.createElement("li");
    movieListItem.textContent = movie.getData();
    movieList.appendChild(movieListItem);
    titleField.value = "";
    lengthField.value = "";
    genreOption.value = "";
  } else {
    alert("All fields are required");
  }
}

movieBtn.addEventListener("click", createMovie);

function createProgram() {
  var dateValue = new Date(dateField.value);
  var currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  if (dateValue) {
    if (dateValue >= currentDate) {
      var program = new Program(dateValue);
      var programListItem = document.createElement("li");
      programListItem.textContent = program.getData();
      programList.appendChild(programListItem);
      dateField.value = "";
    } else {
      alert("Invalid date");
    }
  } else if (!dateValue) {
    {
      alert("Date is required!");
    }
  }
}

programBtn.addEventListener("click", createProgram);
