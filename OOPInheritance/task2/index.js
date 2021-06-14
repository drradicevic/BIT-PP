class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

class Employee extends Person {
  constructor(name, surname, job, salary) {
    super(name, surname);
    this.job = job;
    this.salary = salary;
  }
  getData() {
    return this.name + " " + this.surname + " " + this.salary;
  }
  getSalary() {
    return this.salary;
  }
  increaseSalary() {
    return this.salary + this.salary * 0.1;
  }
}

class Developer extends Employee {
  constructor(name, surname, job, salary, specialization) {
    super(name, surname, job, salary);
    this.specialization = specialization;
  }
  getSpecialization() {
    return this.specialization;
  }
}

class Manager extends Employee {
  constructor(name, surname, job, salary, department) {
    super(name, surname, job, salary);
    this.department = department;
  }
  getDepartment() {
    return this.department;
  }
  changeDepartment(dep) {
    return (this.department = dep);
  }
}
// var employee1 = new Employee("Pera", "Peric", "Programmer", 50000);
// console.log(employee1.getData());
// console.log(employee1.getSalary());
// console.log(employee1.increaseSalary());

// var developer1 = new Developer(
//   "Stanko",
//   "Stankovic",
//   "Developer",
//   60000,
//   "Front-end"
// );
// console.log(developer1.getSpecialization());

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
