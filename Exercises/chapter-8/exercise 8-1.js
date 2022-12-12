let string1 = "How's%20it%20going%3F";

console.log(decodeURIComponent(string1));

let string2 = "How's it going?";

console.log(decodeURIComponent(string2));

let uri_string = "http://www.basescripts.com?=Hello World";

console.log(encodeURIComponent(uri_string));
