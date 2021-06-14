function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

function Employee(name, surname, job, salary) {
  Person.call(this, name, surname);
  this.job = job;
  this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.getData = function () {
  return this.name + " " + this.surname + " " + this.salary;
};
Employee.prototype.getSalary = function () {
  return this.salary;
};
Employee.prototype.increaseSalary = function () {
  return this.salary + this.salary * 0.1;
};

function Developer(name, surname, job, salary, specialization) {
  Employee.call(this, name, surname, job, salary);
  this.specialization = specialization;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;
Developer.prototype.getSpecilization = function () {
  return this.specialization;
};

function Manager(name, surname, job, salary, department) {
  Employee.call(this, name, surname, job, salary);
  this.department = department;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;
Manager.prototype.getDepartment = function () {
  return this.department;
};
Manager.prototype.changeDepartment = function (dep) {
  this.department = dep;
  return this.department;
};

var employee1 = new Employee("Pera", "Peric", "Programmer", 50000);
// console.log(employee1.getData());
// console.log(employee1.getSalary());
// console.log(employee1.increaseSalary());

var developer1 = new Developer(
  "Stanko",
  "Stankovic",
  "Developer",
  60000,
  "Front-end"
);
// console.log(developer1.getSpecilization());

var manager1 = new Manager(
  "Janko",
  "Jankovic",
  "Manager",
  70000,
  "Head of manager"
);
console.log(manager1);

console.log(manager1.getDepartment());

console.log(manager1.changeDepartment("Director"));
console.log(manager1.getDepartment());
