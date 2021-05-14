/*
Write a function that creates an object that represents a project. Each project is
described by: description, programming language, git repository, boolean status that
says if the project is in development or not. Add a method that prints out the project&#39;s
repository, a method that checks if the project is written in JavaScript as well as a
method that checks if the project is in development or not. */
function createProject(description, language, gitUrl, isInDevelopment) {
  var project = {
    description: description,
    language: language,
    gitUrl: gitUrl,
    isInDevelopment: isInDevelopment,
    printRepository: function () {
      console.log(url);
    },
    isJava: function () {
      return language === "JavaScript";
    },
    isDevelopment: function () {
      return isInDevelopment
        ? "project is in development"
        : "project is not in development";
    },
  };
  return project;
}

calculate = createProject(
  "program that calculates",
  "JavaScript",
  "https://github.com/drradicevic",
  true
);

blog = createProject(
  "Neki portal",
  "C#",
  "https://github.com/drradicevic",
  false
);

console.log(calculate);
console.log(blog);
