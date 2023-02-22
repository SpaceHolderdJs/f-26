// var let const 

// 1. Primitives numbers(1,10.785641,100), string("Kyiv", "Igor", "Hello world"), boolean(true, false), null, undefined, bigInt, Symbol  
// 2. Objects {}, [], function () {}

// Primitives

//Numbers
let a = 1;
let b = 5;
let c = a + b;

let items = 40;
let price = 15;
let totalPrice = items == price;

// + - / * > < >= <= %
// == ===

console.log(items == price);

//String

let myName = 'Igor';
let name = 'Igor';

console.log(myName.length - name.length);


let n = '10'; //string
let n2 = 10; //number

console.log(n === n2);

//Boolean

let bool = false;

window.addEventListener('mousemove', (e) => {
    console.log(e.pageX, e.pageY);
    document.body.style.background = `rgb(${e.pageX}, ${e.pageY}, ${(e.pageX + e.pageY) / 1000})`;
});