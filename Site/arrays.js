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

const arr = [1, 2, 4, 5];

// for (let el of arr) {}


let sum = 0;
arr.forEach((el) => sum = sum + el);

console.log(sum, "sum");

let number = 100;

// 2 Написати цикл, що іде по масиву та віднімає від числа кожен його елемент

//3 написати функцію, що приймає масив та повертає його зворотню версію
// [1,2,3] => [3,2,1]

const fn = (arr) => {
    const result = [];

    arr.forEach((el) => result.push(arr.shift()));

    return result;
} 

const arr1 = [1,2,3,34,5,6];

console.log(fn(arr), "reverse");