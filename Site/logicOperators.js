// if

// const a = 30;
// const b = 30;

//boolean

// if (a - b === -20) {
//     alert("Yes");
// } else {
//     alert("NO");
// }

// const info = prompt("Enter name");
// console.log(info, "info");

// if (a > b) {
//     alert("a grater than b");
// } else if (a < b) {
//     alert("a lower than b");
// } else {
//     alert("Numbers are equal");
// }

//2.

// IGor - всі літери зробити великими
// naMe - всі літери зробити маленькими

// const str = 'Igoggr';

// console.log(str.indexOf('g'), "index");

// Numbers, Strings, Boolean
// null, undefined

// const number = 10;
// const text = "Igor";
// const bool = true;
// const undf = undefined;

// console.log(Boolean(undefined), text[5]);
// console.log(!true, !false);

// if (!text[5]) {
//     alert("it`s not exists");
// }

//null
// console.log(Boolean(null), "null");
// console.log(typeof undefined, "typeof undefined");
// console.log(typeof null, "typeof null");

// let name = "Olena"; //undefined
// name = "Igor";
// const name2 = "Olena";

// console.log(name, "name");
// console.log(undefined == undefined);
// console.log(null === undefined);
// console.log(null >= null);

// const value = prompt("Enter your name");
// // console.log(Boolean(""), "value");

// if (!value) {
//     alert("Please enter the name");
//     const value1 = prompt("Enter your name");
// }

// !, ||, &&

// console.log(1 < 0 || 10 < 1 || 1 < -1, "or ||");
// const str = "Igor";

// falsy: false, "", undefined, null, 0

// const name = 0 || null || "Hello";
// alert("Your name is " + name);

// const name2 = !prompt("Enter name 2") && "Hello";
// console.log(name2, "name2");

1 === 0 ? console.log("true") : console.log("false"); //ternar operator

const a = !(1 > 0) ? 100 : 0;
console.log(a, "a");

function fn3 () {
    return 10;
}

const fn = (a, b) => {
  if (a > b) {
    console.log(`a is bigger`);
  } else if (a < b) {
    console.log(`b is bigger`);
  } else {
    console.log(`Numbers are equal`);
  }
}

const result = fn(10);

console.log(result);


const fn1 = (a) => a;

fn(10);
fn1(10);
