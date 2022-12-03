class Person {
  constructor(firstname = "", lastname = "") {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

let a = new Person("Angelca", "Carter");

let b = new Person("Nakisha");

console.log("Hello! " + a.firstname + " " + a.lastname);
console.log("Hello! " + b.firstname + " " + b.lastname);
