const string = "Hello";
const sentence = "I am walking";
const password = " password&";

console.log(string.length, string);

console.log(string[0], string[3]);

console.log(string.toUpperCase(), "uppercase");
console.log(string.toLowerCase(), "lowercase");

console.log("H".toLowerCase() === "h", "comparation");

console.log(password.includes("0"), "includes");

console.log(string.replace("l", "❤"), "replace");
console.log(string.replaceAll("l", "/word/"), "replaceAll");

//1

const word = "H&E&L&L&O"; //&

console.log(
    word.toLowerCase().replaceAll("&", "")
);

console.log(string.at(-1), "letter");

console.log(string.trim(), "trim");

console.log(string.concat(sentence, password), "concat");

// 2. 

const str1 = "I am driving";
const str2 = "He is walking";

console.log(str1.slice(2, 5), "slice");

const ch = "123";
console.log(Number(ch), +ch,"number");

const ch2 = 123;

console.log(ch2.toString(), "toString");

// Browser API


const name = prompt("Enter your name");
const age = +prompt('Enter your age');
console.log(age, "age");
alert('Your name is ' + name + ' your age is ' + age);