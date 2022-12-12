let input = "thIs will be capiTalized for each word";
let output = "";

input_arr = input.split(" ");
console.log(input_arr);
for (word in input_arr) {
  word = input_arr[word].toLowerCase();
  new_word = word[0].toUpperCase() + word.slice(1);
  output += new_word;
}
console.log(output);
