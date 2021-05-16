/*
Write a function that creates an object that represents a project. Each project is
described by: description, programming language, git repository, boolean status that
says if the project is in development or not. Add a method that prints out the project&#39;s
repository, a method that checks if the project is written in JavaScript as well as a
method that checks if the project is in development or not. */
function CreateProject(description, language, gitUrl, isInDevelopment) {
  this.description = description;
  this.language = language;
  this.gitUrl = gitUrl;
  this.isInDevelopment = isInDevelopment;
  (this.printRepository = function () {
    console.log(url);
  }),
    (this.isJava = function () {
      return language === "JavaScript";
    }),
    (this.isDevelopment = function () {
      return isInDevelopment
        ? "project is in development"
        : "project is not in development";
    });
}

var calculate = new CreateProject(
  "program that calculates",
  "JavaScript",
  "https://github.com/drradicevic",
  true
);

var blog = new CreateProject(
  "Neki portal",
  "C#",
  "https://github.com/drradicevic",
  false
);

console.log(calculate);
console.log(blog);
