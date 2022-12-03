class Person {
  constructor(firstname = "", lastname = "") {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  fullname() {
    return this.firstname + " " + this.lastname;
  }
}

let a = new Person("Angelca", "Carter");

let b = new Person("Nakisha");

console.log("Hello! " + a.fullname());
console.log("Hello! " + b.fullname());
