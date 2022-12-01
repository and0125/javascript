let myCar = {
  make: "Honda",
  model: "Civic",
  year: 2012,
  color: "Maroon",
};

let variable = "color";

myCar[variable] = "Black";

let variable2 = "forSale";

myCar[variable2] = false;

console.log(myCar.make, myCar.model, myCar[variable2]);
