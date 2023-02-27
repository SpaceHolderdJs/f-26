// const arr = [1, 2, 3];
// const arr2 = ["Igor", "Alex", "Alex"];

// const obj = {
//   key: "value",
// };

// console.log(arr.includes(10), "includes");
// console.log(arr.at(-1), "at");
// console.log(arr.concat(arr2), "concat");
// console.log(arr.join(","), "join");
// console.log(arr2.indexOf("Alex"), "indexof");

// 1 написати функцію, що приймає масив та елемент що потрібно шукати, функція має повернути true якщо у масиві знайдено шуканий елемент і false якщо ні (не знайдено)
// 2 написати функцію, що приймає 2 масиви та повертає 1 масив, на базі об`єднаних масивів
// 3 написати функцію що отримує 2 масиви та повертає той, чия довжина більша

// const fn = () => {}

// for (let element of arr2) {
//     console.log(element, "element");
// }

// for (let i = 0; i < arr.length; i = i + 1) {
//     console.log(arr[i], "element");
// }

// 4 написати цикл, що виводить всі елементи масива по черзі

// const arr3 = [() => "Hello ", () => "World ", () => "!!!"];

// // fn (arr) => "Hello World !!!";

// const fn = (arrWithFunctions) => {
//     let result = "";

//     for (let func of arrWithFunctions) {
//         result = result + func();
//     }

//     return result;
// }

// console.log(fn(arr3));

// const arr = [1, "Hello", "World", 3, 10];

// const arr2 = [];

// arr2[100] = "Hello"

// console.log(arr2);

// Написати функцію, приймає масив та повертає інший масив на базі отриманого, що містить лише числа

// function fn (arr) {
//     const result = []; // 1,3,10

//     for (let i = 0; i < arr.length; i = i + 1) {
//         if (typeof arr[i] === "number") {
//             console.log(arr[i], i, "data");
//             result[i] = arr[i];
//         }
//     }

//     return result;
// }

// console.log(fn(arr), "!!!!");

// class Human {
//     constructor (name) {
//         this.name = name;

//         return this;
//     }
// }

// const array = [new Human("Alex"), new Human("Igor"), {name: "Oleg"}, 0];

// function checkInstance (takenClass, arrOfInstances ) {
//     const result = [];

//     for (let element of arrOfInstances) {
//         if (element instanceof takenClass) {
//             result.push(element);
//         }
//     }

//     return result;
// }

// console.log(checkInstance(Human, array), "result");

// push - додати у кінець
// pop - забрати з кінця
// shift - забрати з початку
// unshift - додати елемент масиву на початок

// const arr = [1, 3, 4 ];
// arr.push(10);

// const lastElem = arr.pop();

// const firstElem = arr.shift();

// arr.unshift("Hey");

// console.log(arr, firstElem, "arr");

// 1 Створити масив з 5 елементів, вирізати перший елемент та вставити його в кінець масиву

// const arr = [1, 2, 4, 5];

// // for (let el of arr) {}

// let sum = 0;
// arr.forEach((el) => sum = sum + el);

// console.log(sum, "sum");

// let number = 100;

// 2 Написати цикл, що іде по масиву та віднімає від числа кожен його елемент

//3 написати функцію, що приймає масив та повертає його зворотню версію
// [1,2,3] => [3,2,1]

// const fn = (arr) => {
//     const result = [];

//     arr.forEach((el) => result.push(arr.shift()));

//     return result;
// }

// const arr1 = [1,2,3,34,5,6];

// console.log(fn(arr), "reverse");

// const arr = [1, 2, 3, 4, 5];

// const names = ["Igor", "Oleg", "Olena"];
// const ages = [{ age: 10 }, { age: 20 }, { age: 11 }];

// const arrOfString = arr.map((el, i) => el + 10);

// console.log(arrOfString, "result");

// const updatedAges = ages.map((object, i) => {
//     object.age += 1;
//     object.name = names[i];
//     return object;
// });

// const updatedNames = names.map((name, i) => {
//   return { name: name, age: ages[i].age };
// });

// console.log(updatedNames, "names");

// 4. Написати функцію що приймає масив рядків та повертає масив з number на базі масиву з рядками
// ["1", "2", "3"] => [1, 2, 3]

// console.log(
//   ["1", "2", "3"].map((el) => +el),
//   "result"
// );

// //filter

// //mutable

// const arr2 = ["1", 1, "Hello", 100];

// const result = arr2.filter((el) => typeof el === "string");

// console.log(result, "result");

// 5. Дано масив const arr = [{age: 10}, {age: 22}, {age: 5}];
// 6. Додати до масиву що повернув вам filter до поля age кожного об`єкта 20;
// 7. Перегорніть отриманий масив

// const users = [
//   { name: "Oleg", age: 22, city: "Kharkiv" },
//   { name: "Oleg", age: 22, city: "Kyiv" },
//   { name: "Oleg", age: 40, city: "Poltava" },
//   { name: "Oleg", age: 30, city: "Poltava" },
// ];

// 1. Поверніть масив лише тих користувачів, що мають поле city
// 2. На базі попреднього масиву визначте користувача з найбільшим віком

// let biggestAge = users[0];

// users.forEach((object) => {
//     if (object.age > biggestAge.age) {
//         biggestAge = object;
//     }
// });

// console.log(biggestAge, "biggest age");

// every, some, reduce, filter, this, [...arr]

// const arr = [1,2,3,4,5];

// const result = arr.every((e) => typeof e === "number");
// console.log(result, "result of every");

// const result2 = arr.some((e, i, arr) => e === 6);
// console.log(result2, "result of some");

// 1. всі а у об`єктах є числами (number)
// 2. всі а у об`єктах мають довжину 2
// 3. деякі а у об`єктах мають у складі цифру 1

// const arr2 = [{a: 10}, {a: 20}, {a: 30}];

// Array.prototype.myEvery = function (fn) {
//   let result = true;

//   for (let i = 0; i < this.length; i = i + 1) {
//     const callBackResult = fn(this[i], i, this); //criteria
//     if (!callBackResult) {
//       result = false;
//     }
//   }

//   return result;
// }

// console.log([1,2,3,4,5].myEvery((e) => typeof e === "number"), "myEvery");

// el, i, arr
// acc, el, i, arr

// const result = [1, 2, 3, 4, 5].reduce((acc, el) => (acc = acc + el));
// console.log(result, "result");

// const data = [
//   { name: "Kyiv", population: 130 },
//   { name: "Lviv", population: 230 },
//   { name: "Kharkiv", population: 630 },
//   { name: "Poltava", population: 430 },
// ];

// const result = data.reduce((acc, obj) => {
//   acc.push({...obj, population: obj.name.length});
//   return acc;
// }, []);

// const result = data.reduce((acc, obj, i) => {
//   acc[i] = obj;
//   return acc;
// }, {});

// console.log("result", result);

const data = [
 { name: "Kyiv", population: 130 },
 { name: "Lviv", population: 230 },
 { name: "Kharkiv", population: 630 },
 { name: "Poltava", population: 430 },
];

// Object.keys
// Object.values

//1 Повернути масив на базі data в тому вигляді, що він був на початку

// const result = Object.keys(data).reduce((acc, el) => {
//   acc.push(data[el]);
//   return acc;
// }, []);

// console.log(result, "result");

// const result = data.filter((obj) => obj.population > 430);

// console.log(result, "result");

// Array.prototype.myFilter = function (fn) {
//   const result = [];

//   for (let i = 0; i < this.length; i = i + 1) {
//    const callBackResult = fn(this[i], i, this);

//    if (callBackResult) {
//     result.push(this[i]);
//    }
//   }

//   return result;
// }

const result2 = [1, "Hello", 2, "World"].reduce((acc, el) => {
  if (typeof el === "string") {
    acc.push(el);
  }

  return acc;
}, []);

console.log(result2, "result2");