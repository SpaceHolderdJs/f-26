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

// const data = [
//   { name: "Kyiv", population: 130 },
//   { name: "Lviv", population: 230 },
//   { name: "Kharkiv", population: 630 },
//   { name: "Poltava", population: 430 },
// ];

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

// const result2 = [1, "Hello", 2, "World"].reduce((acc, el) => {
//   if (typeof el === "string") {
//     acc.push(el);
//   }

//   return acc;
// }, []);

// console.log(result2, "result2");

// const obj = {
//   name: "Igor",
//   sayHello: function () {
//     console.log(`Hello, I am ${this.name}`);
//   }
// }

// class Human {
//   constructor (name) {
//     this.name = name;
//   }

//   sayHello () {
//     console.log(`Hello, I am ${this.name}`);
//   }
// }

// const human = new Human("Olena");
// human.sayHello();

//rest ...
//spread ...

// const obj1 = {name: "Olena"};
// console.log({...obj1}, "new object");

// class SuperArray extends Array {
//   constructor (...elements) {
//     super(...elements);
//   }

//   showInfo () {
//     console.log(this, "THIS", this.length);
//   }

//   at (index) {
//     return {
//       element: this[index],
//       array: this
//     }
//   }

//   push (el) {
//     this[this.length] = el;
//     console.log(el, this, this.length);
//   }
// }

// const superArray = new SuperArray(1, 2, 3, 4, 5);
// const superArray2 = new SuperArray("Hello", "world");

// console.log(superArray.at(2), "at");
// superArray.showInfo();
// superArray2.push("!!!");
// superArray2.showInfo();
// superArray2.push(":)");
// superArray2.showInfo();

// const arr = [10, 20, 30];

// const result = arr.reduce((acc, e) => (acc = acc + e), 100);
// console.log(result, "result");

// fill
// const arr2 = new Array(10).fill("");
// console.log(arr2, "arr");

// reduce, sort

// const arr3 = [10, 40, 30, 40, 20, 15];
// arr3.sort((n1, n2) => n1 - n2); // 1, -1, 0
// console.log(arr3, "sorted");

// 1
// const arr4 = [100, 105, 7, 8, 1, 4];

// const arr5 = ["Apple", "apple", "y", "i"];
// arr5.sort((str1, str2) => str2.localeCompare(str1));
// console.log(arr5, "result");

// 2

// const arr6 = [
//   { name: "Igor", score: 170 },
//   { name: "Olena", score: 150 },
//   { name: "Yula", score: 200 },
// ];

//flat

// const arr7 = [1, 2, 3, [7, 0, 4], "str", [10], [100, [100, 50]]];
// console.log(arr7.flat(), "flat");

// Array.prototype.myFlat = function () {
//   const result = [];

//   for(let i = 0; i < this.length; i = i + 1) {
//     if (Array.isArray(this[i])) {
//       this[i].forEach((e) => result.push(e));
//     } else {
//       result.push(this[i]);
//     }
//   }

//   return result;
// }

// console.log(arr7.myFlat(), "myFlat");

//3

// const arr8 = [1, [10, 0], [1]];

// const items = [
//   ["item1", "item1", "item1"],
//   ["item2", "item2", "item2"],
//   ["item3", "item3", "item3"],
// ];

// for (let element of items) {
//   console.log(element, "element");
//   for (let item of element) {
//     console.log(item, "item");
//   }
// }

// items.forEach((el, i) => {
//   console.log(el[0], i,  "el");
//   // el.forEach((item) => console.log(item, "item"));
// });

// const data = [
//   [10, 5, 6],
//   [7, 2, 4],
//   [10, 8, 5],
//   [11, 10, 6],
// ];

// const sum = data.reduce((acc, el) => {
//   acc = acc + el.reduce((acc2, el2) => acc2 = acc2 + el2);
//   return acc;
// },0);

// const sum = data.flat().reduce((acc, el) => acc = acc + el);

// console.log(sum, "sum");

// const data = [
//   [{ score: 10 }, { score: 100 }, { score: 17 }],
//   [{ score: 10 }, { score: 10 }, { score: 5 }],
//   [{ score: 2 }, { score: 8 }, {score: 1}],
// ];

// const scores = data.flat().map((obj) => obj.score);

// console.log(Math.max(...scores), "max");

// const data1 = [1, 2,3,4, "Hello", "World", {name: "Vasya"}];

// const onlyNumbers = data1.filter((e) => typeof e === "string" );

// console.log(onlyNumbers, "filtered");

// const stringValue = data1.find((e) => e.name === "Vasya");

// console.log(stringValue, "value");

// const m = ["Igor", "Oleg", "Maxim", "Vasya"];
// const w = ["Yana", "Katya", "Olena", "Yula"];

// const users = [
//   { name: "Igor", age: 10 },
//   { name: "Vasya", age: 20 },
//   { name: "Oleg", age: 30 },
//   { name: "Yana", age: 30 },
//   { name: "Olena", age: 30 },
//   { name: "NoName", age: 10}
// ];

// const stranger =  users.find((e) => !w.concat(m).includes(e.name));
// console.log(stranger, "stranger");

// //
// Array.prototype.myIncludes = function (element) {
//     const result = this.find((e) => e === element ); //undefined | element
//     return Boolean(result);
// }

// const arr = ["Hello", "World"];
// console.log(arr.myIncludes("Hello2"), "result");

//1.
const arr = [{ a: 10 }, { a: 11 }, { a: 4 }];

arr.sort((obj1, obj2) => obj2.a - obj1.a);

console.log(arr[0].a, "arr");

// 1.1 Знайти середнє арифметичне полів а
// 2. Знайти найбільшу а
// 3. Знайти сумму всіх а

// let max = arr[0].a;

// arr.forEach((e) => {
//   if (e.a > max) {
//     max = e.a;
//   }
// });

// console.log(max, "max!!!");

// for (let i = 0; i < 10; i = i + 1) {
//   console.log(i, "index");
// }
// let isStopped = false;

// const data = [];

// while (!isStopped) {
//   data.push(Math.floor(Math.random() * 10));
//   if (data.length > 20) {
//     isStopped = true;
//   }
// }

// console.log(data, "data");

// const questions = [confirm("Yes or no"), confirm("Red or blue"), confirm("A or B")];
// const answers = [];

// let i = 0;

// while (i < questions.length) {
//   let answer =  questions[i];
//   answers.push(answer);
//   i = i + 1;
// }

// console.log(answers, "answers");

// 1. Написати свій цикл while, що виводить числа від 0 до 10;
// const role = "admin";

// switch (role) {
//     case "admin":
//       console.log("I am a");
//       break;
//     case "user":
//       console.log("I am b");
//       break;
//     case "guest":
//       console.log("I am c");
//       break;
//     default:
//       console.log("I am unknown symbol");
// }

// const color = prompt("Enter color");
// console.log(color, "COLOR");

//1. Запросити через prompt у користуача колір
// якщо колір білий - пофарбувати body в чорний колір
// якщо колір чорний - пофарбувати body в білий колір
// якщо це інші кольори - нічого не робимо

// document.body.style.background = "";

// if (role === "admin") {
//   console.log("I am a");
// } else if (role === "user") {
//   console.log("I am b");
// } else {
//   console.log("I am unknown symbol");
// }

// const role = "admin";

// const rolesScenarios = {
//   admin: () => {
//     console.log(`I am admin`);
//   },
//   user: () => {
//     console.log(`I am user`);
//   },
//   guest: () => {
//     console.log(`I am guest`);
//   },
//   default: () => {
//     console.log(`I am default`);
//   }
// };

// const scenario = rolesScenarios[role] || rolesScenarios.default;

// scenario();

// const userCommand = prompt("Enter your command");
// const gretings = ["hola", "hello", "hi", "hallo"];

// const scenarios = {
//   "add_new_greeting": () => {
//     const newGreeting = prompt("Enter new greeting word");
//     gretings.push(newGreeting);
//     alert("Greetings added");
//   }
// }

// if (scenarios[userCommand]) {
//   scenarios[userCommand]();
// }

// if (gretings.includes(userCommand)) {
//   alert("Greetings");
// }

// class UserInterface {
//   static greetings = ["hola", "hello"];

//   static scenarios = {
//     "add_greeting": () => {
//       const newGreeting = prompt("Enter greeting");

//       if (UserInterface.greetings.find((el) => el === newGreeting )) {
//         return alert("This greeting is already here");
//       }

//       UserInterface.greetings.push(newGreeting);
//       UserInterface.greetings = UserInterface.greetings.map((e) => e + "!");
//       console.log("greetings", UserInterface.greetings);
//       alert(UserInterface.greetings);
//     },
//     "greetings": () => {
//       const msg = prompt("Enter greeting");
//       if (UserInterface.greetings.includes(msg)) {
//         alert("Greetings");
//       }
//     },
//     "remove_greetings": () => {
//       const wordToRemove = prompt("Enter word to remove");
//       UserInterface.greetings = UserInterface.greetings.filter((e) => e !== wordToRemove );
//       alert("Word removed");
//     }
//   };

//   constructor () {
//     this.command(true);
//   }

//   command (isRecursive = false) {
//     this.command = prompt("Enter command");
//     const action = UserInterface.scenarios[this.command];

//     if (action) {
//       action();
//     }

//     if (isRecursive) {
//       new UserInterface();
//     }

//   }
// }

// new UserInterface();

// додати сценарій (так команду) що видаляє слово вітання з вашого масиву вітань (слово треба передати у prompt)

// const array = [
//   { city: "Kyiv", population: 0 },
//   { city: "Lviv", population: 0 },
//   { city: "Poltava", population: 0 },
//   { city: "New York", population: 0 },
//   { city: "London", population: 0 },
// ];
// const populations = [10000, 50000, 4000, 60000, 3000];
// const ukrainianCities = ["Kyiv", "Lviv", "Odessa", "Poltava"];

//1. Заповнити поля population кожного елемента масиву array відповідним за індексом елементом з масиву populations
//2. Після заповнення повернути загальну сумму всіх полів population у масиві array

//3. Змініть ваш код таким чином, щоб сума популяції враховувала лише українські міста (з масиву ukrainianCities)

// let result = 0;
// let iterator = 0;
// for (let object of array) {
//   object.population = populations[iterator];
//   iterator = iterator + 1;
// }
// console.log(result);

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHello() {
//     console.table(this, "Here I am");
//   }
// }

// class User {
//   constructor(person, email, password) {
//     if (person) {
//       for (let key in person) {
//         this[key] = person[key];
//       }
//       this.isPrivateUser = false;
//     } else {
//       this.isPrivateUser = true;
//     }

//     this.email = email;
//     this.password = password;
//   }

// }

// const person = new Person("Igor Person", 23);

// Person.prototype.sayHi = function () {
//   console.log("Hi");
// }

// person.sayHello();
// person.sayHi();

// for (let key in Person.prototype) {
//   console.log(Person.prototype[key], "method");
// }

// const publicUser = new User(person, "sergienko339@gmail.com", "password");
// const privateUser = new User(null, "privateuseremail@gmail.com", "password2");

// console.log(person, publicUser, privateUser, "data");

// Person.prototype.sayHello.apply(publicUser);
// User.prototype.sayHello = Person.prototype.sayHello.bind(publicUser);

// publicUser.sayHello();
// privateUser.sayHello();

// call, bind, apply

// function f1 (x) {
//   console.log(this, "this", x + 10);
// }

// f1(100, 1);

// f1.apply({n: 1}, [5]);

// function fn(obj, count, a) {
//   console.log(this, obj, count);
// }

// fn({name: "Igor"}, 100, 90);

// fn.apply(window, [{name: "Igor"}, 100, 90]);
// fn.call(window, {name: "Igor"}, 100, 90);
// fn.bind(window, {name: "Igor"}, 100, 90);

// fn.apply([1, 2, 2]);

//1. Створити функцію, що працює з this та викликати її за допомогою bind передавши в неї інший контекст (object)

// const arr1 = [1,2,3,4,5, 1000];

// console.log(Math.max.apply(null, arr1), "max");
// console.log(Math.min.apply(null, arr1), "min");

// const minAndMaxFromArray = (arr) => [ Math.min.apply(null, arr), Math.max.apply(null, arr) ];

// console.log(minAndMaxFromArray([1,2,6, 4, 0, 9, 1, 1000, 1]));

// 1. ForEach

const users = [
  { name: "Igor" },
  { name: "Oleg" },
  { name: "Igor" },
  { name: "Igor" },
  { name: "Igor" },
  { name: "Igor" },
];

const result = [];

users.forEach((e, i) => {
  const subArray = users.slice(i * 3, i * 3 + 3);
  result.push(subArray);
});

console.log(
  result.filter((subArray) => subArray.length > 0),
  "result"
);

class Counter {
  constructor(initialValue) {
    this.count = initialValue;
  }
}

let start = 0;
let end = 3;

while (start < Math.floor(users.length / 3)) {
  users.slice(start, end);
  start = start + 3;
  end = end + 3;
}

//1. Реалізувати наступну логічну конструкцію
// new Counter(10).increment().increment().decrement().increment()
// new Counter(100).add(60).divide(90)
// new Counter(70).doubleValue().doubleValue()

// Array.prototype.myForeach = function (fn) {
//   for (let i = 0; i < this.length; i++ ) {
//     fn(this[i], i, this);
//   }
// }

// 2. Написати функцію що заповнює масив вказаною кількістю рандомних чисел, що гарантовано не повторюються !!!

function randomizer(arr, itemsQuantity) {
  const getRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 100);

    while (arr.includes(randomNumber)) {
      randomNumber = Math.floor(Math.random() * 100);
    }

    return randomNumber;
  };

  for (let i = 0; i < itemsQuantity; i++) {
    arr.push(getRandomNumber());
  }

  return arr;
}

const result2 = randomizer([1, 2, 3], 10);
console.log(result2, "!!!!");

// project, developer, company
// company -> project
// company -> developer
// project -> developer

class DefaultMethods {
  constructor(isClosed) {
    this.isClosed = isClosed;
  }

  showInfo() {
    console.log(this);
  }

  close () {
    if (this instanceof Developer) return;

    if (this instanceof Company) {
      //
    }

    if (this instanceof Project) {
      this.isClosed = true;
    }


  }
}

class Company extends DefaultMethods {
  constructor(name, projects, age) {
    super(false);
    this.name = name;
    this.projects = projects;
    this.developers = this.getDevelopersFromProjects(); // method to implement
    this.age = age;
  }

  getDevelopersFromProjects() {
    const developers = this.projects.reduce((acc, project) => {
      project.developers.forEach((developer) => acc.push(developer));
      return acc;
    }, []);

    return developers;
  }

  addProject(newProject) {
    if (newProject instanceof Project) {
      this.projects.push(newProject);
      return;
    }
    new Error("Item is not belongs to proper Class");
  }

  removeProject(projectToDelete) {
    if (projectToDelete instanceof Project) {
      this.projects = this.projects.filter(
        ({ name }) => projectToDelete.name !== name
      );
      return;
    }
    new Error("Item is not belongs to proper Class");
  }

  addDeveloper(newDeveloper) {
    if (newDeveloper instanceof Developer) {
      this.developers.push(newDeveloper);
      return;
    }
    new Error("Item is not belongs to proper Class");
  }

  removeDeveloper(developerToDelete) {
    if (developerToDelete instanceof Developer) {
      this.developers = this.developers.filter(
        ({ name }) => developerToDelete.name !== name
      );
      return;
    }
    new Error("Item is not belongs to proper Class");
  }
}

class Project extends DefaultMethods {
  constructor(name, duration, developers, budget) {
    super(false);
    this.name = name;
    this.duration = duration;
    this.developers = developers;
    this.budget = budget;
  }

  addDeveloper(newDeveloper) {
    if (newDeveloper instanceof Developer) {
      this.developers.push(newDeveloper);
      return;
    }
    new Error("Item is not belongs to proper Class");
  }

  removeDeveloper(developerToDelete) {
    if (developerToDelete instanceof Developer) {
      this.developers = this.developers.filter(
        ({ name }) => developerToDelete.name !== name
      );
      return;
    }
    new Error("Item is not belongs to proper Class");
  }

  finish(isSuccess) {

    // if (isSuccess) {
    //   this.developers.forEach((developer) =>
    //     developer.increaseSalary((this.budget / this.developers.length) * 0.5)
    //   );
    // } else {
    //   this.developers.forEach((developer) =>
    //     developer.decreaseSalary(developer.salary * 0.3)
    //   );
    // }

    this.developers.forEach((developer) =>
      isSuccess
        ? developer.increaseSalary((this.budget / this.developers.length) * 0.5)
        : developer.decreaseSalary(developer.salary * 0.3)
    );
  }
}

class Developer extends DefaultMethods {
  constructor(name, age, salary, skills) {
    super(false);
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.skills = skills;
  }

  addSkill(newSkill) {
    if (!this.skills.includes(newSkill)) {
      this.skills.push(newSkill);
    }
  }

  removeSkill(skillToRemove) {
    this.skills = this.skills.filter((skill) => skill !== skillToRemove);
  }

  birthday() {
    this.age++;
    this.salary = this.salary + this.salary * 0.3;
  }

  increaseSalary(amount) {
    this.salary += amount;
  }

  decreaseSalary(amount) {
    this.salary -= amount;
  }
}

const amazon = new Company(
  "Amazon",
  [
    new Project(
      "Frontend",
      1.5,
      [new Developer("John", 27, 3000, ["JS", "CSS"])],
      25000
    ),
    new Project(
      "Backend",
      1.5,
      [new Developer("Bob", 47, 6000, ["Node.js", "Express"])],
      15000
    ),
  ],
  20
);

amazon.showInfo();
amazon.projects[0].finish(true);
amazon.showInfo();
