// Object, Function, Array - Objects(type)

// const a = 10;

// const person = {
//   age: 23,
//   name: "Igor",
//   city: "Kyiv",
//   newKey: "key",
// };

// console.log(person, "person");

// console.log(person.name, person.age, person.city, person["1"], "name");

// person.age = 100;
// person.name = "Oleg";

// console.log(person, "person");
// console.log(person["newKey"], "newKey");

// //

// function fn() {
//   return 1;
// }

// const result = fn();

// console.log(result, "fn was called");

// function car(price, color) {
//   if (!price || !color) {
//     return "Data is wrong";
//   } else {
//     return {
//       price: price,
//       color: color,
//     };
//   }
// }

// const newCar = car(10000, "white");
// const newCar1 = car(100000, null);
// console.log(newCar, newCar1, "newCar");

// const obj = {
//   name: "Igor",
//   location: {
//     city: "Kyiv",
//     country: "Ukraine",
//     coords: {
//       x: 10,
//       y: 20,
//       z: 100,
//     },
//   },
// };

// const obj1 = {
//     a: 10,
//     b: 20,
//     c: 30
// }

// delete obj1.c;
// delete obj1.a;

// const fn = function (key) {
//     return key.toUpperCase();
// }

// obj1["hello"] = "hello";

// obj.location.coords.z = 80;
// console.log(obj, "city");

// console.log(obj1, "obj1");

// console.log(Object.keys(obj1), Object.values(obj1));
// console.log(Object.entries(obj1));

// iterator

// for (let i = 0; i < 10; i = i + 1) {
//    obj1[String(i)] = i;
//    console.log(obj1);
// }

// console.log("Finished");

// const obj = {};
// for (let i = 0; i < 100; i = i + 1) {
//   obj[i] = i;
//   console.log(obj);
// }
// console.log("Finished");

// const obj = {
//   name: "Igor",
//   age: 20,
//   city: "Kyiv",
//   year: 1999,
// };

// const obj1 = {};

// for (let key in obj) {
//   obj1[key] = obj[key];
// }

// console.log("result", obj1, obj);

// Написати функцію, що приймає object та виводить у консоль лише ті його значення, що є типом Number
// typeof a === "number"

// !isNaN(obj[key]);

// const fn = (obj) => {
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       console.log("value", obj[key]);
//     }
//   }
// };

// fn(obj);

const users = [
  { name: "Igor", favouriteTechnology: "html" },
  { name: "Oleg", favouriteTechnology: "css" },
  { name: "Yula", favouriteTechnology: "js" },
  { name: "Igor2", favouriteTechnology: "html" },
  { name: "Yula", favouriteTechnology: "python" },
];

const technologies = {
  html: 0,
  css: 0,
  js: 0,
  python: 0,
  name: "Danya",
};

for (let user of users) {
  technologies[user.favouriteTechnology] =
    technologies[user.favouriteTechnology] + 1;
}

console.log(technologies);

let obj1 = { name: "Igor", age: 23 };
let obj2 = { ...technologies, ...obj1 };

obj1.name = "Oleg";

console.log(obj2, "!!!");

function fn(fn1, a, b) {
  return fn1(a, b);
}

function sum(a, b) {
  return a + b;
}

const result = fn(sum, 10, 80);

console.log(result, "result");
