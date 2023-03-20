// 1
// дано масив [50, 60, 70, 80] (а)
// 1. Перегорнути масив
// 2. Поверніть масив, у якому всі числа будуть без 0
// 3. Знайдіть у массиві всі числа кратні 25
// 4. [10, 20, 30, 40, 100] (b) додайте до масиву а масив b

// const arr = [50, 60, 70, 80];
// const arr2 = [10, 20, 30, 40, 100];

// const sumOfArrays = (arr1, arr2) => {
//     const result = [];

//     const checkArrayElement = (element) => element || 0;

//     if (arr1.length > arr2.length) {
//         arr1.forEach((el, i) => result.push(el + checkArrayElement(arr2[i])))
//     } else {
//         arr2.forEach((el, i) => result.push(el + checkArrayElement(arr1[i])))
//     }

//     return result;
// }

// console.log(sumOfArrays(arr, arr2), "result");

// const sumOfArrays = (arr1, arr2) => {
//   const checkArrayElement = (element) => element || 0;

//   if (arr1.length > arr2.length) {
//     return arr1.reduce((acc, el, i) => {
//       acc.push(el + checkArrayElement(arr2[i]));
//       return acc;
//     }, []);
//   } else {
//     return arr2.reduce((acc, el, i) => {
//       acc.push(el + checkArrayElement(arr1[i]));
//       return acc;
//     }, []);
//   }
// };

// console.log(sumOfArrays(arr, arr2), "result");

const obj = {name: "Igor", age: 23};
obj["city"] = "Kyiv";
obj.city = "Lviv";

Object.defineProperty(obj, "parameter", { value: "hello", enumerable: true, configurable: true });

obj["parameter"] = "Bye!";

console.log(obj);
console.log(obj.parameter)

for (let key in obj) {
    console.log(key, obj[key]);
}

class MyClass2 {
    
    constructor (a) {
        this.b = 1000;
        Object.defineProperty(this, "a", {value: a, enumerable: false, writable: false});
    }



    getA () {
        console.log(this.a, "a!!!");
        return this.a;
    }

    getB () {
        return this.b;
    }
}

const instanceClass3 = new MyClass2(10);
instanceClass3.getA();
console.log("class (private)", instanceClass3);




function MyClass (a, privateArguments) {
    this.a = a;
    

    privateArguments.forEach((obj) => {
        const key = Object.keys(obj)[0];
        const value = Object.values(obj)[0];

        this[key] = value;

        // Object.defineProperty(this, key, {value: value, enumerable: false, writable: false});
    });

    return this;
}

const instanceClass = new MyClass(10, [{private: "private2"}, {private: "private1"}, {private3: "private"}]);

//написати перевірку у тілі функції конструктора MyClass що перевіряє унікальність кожного приватного поля та відсіяти дублікатні приватні поля

const instanceClass2 = new MyClass(11, [{name: "name"}]);

console.log(MyClass.prototype, "proto");

console.log(instanceClass, "instance");
console.log(instanceClass2, "instance");

// Object
// defineProperty
// call, bind, apply
// functions Constructors
// prototype
