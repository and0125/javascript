const prompt = require("prompt-sync")();

id = prompt("do you have id? (y/n)");
message = "";

id == "y" ? (message = "enter") : (message = "do not enter");

console.log(message);
