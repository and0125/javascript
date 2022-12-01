let array = [];

array.push("Milk", "Bread", "Apples");

console.log(array);

array.splice(1, 1, "Bananas", "Eggs");

console.log(array);

array.pop();

console.log(array);

array.sort();

console.log(array);

milkIndex = array.indexOf("Milk");

console.log(milkIndex);

array.splice(1, 0, "Carrots", "Lettuce");

console.log(array);

let array2 = ["Juice", "Pop"];

array = array.concat(array2);

array = array.concat(array2);

console.log(array);

popIndex = array.indexOf("Pop");

console.log(popIndex);
