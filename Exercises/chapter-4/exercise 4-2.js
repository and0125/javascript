const prompt = require("prompt-sync")();

age = prompt("what's your age? ");

age = parseInt(age);

message = "";

if (age >= 21) {
  message = "Enter and get all the alcohol";
} else if (age >= 19) {
  message = "Enter but sneak alcohol";
} else {
  message = "You can't enter or get alcohol...from here";
}

console.log(message);
