// number

let balance = 1000;
let anotherBalance = new Number(1000);

// console.log(balance);
// console.log(anotherBalance.valueOf()); 


console.log(typeof(balance)); // number
console.log(typeof(anotherBalance)); // object

//boolean

let isActive = true;
let isReallyActive = new Boolean(true); //not recommended

console.log(typeof(isActive)); 
console.log(typeof(isReallyActive));


//null and undefined

let firstname = null;
let lastname = undefined;
console.log(firstname); 
console.log(lastname);

//string

let myString = "hello";
let myString2 = 'hii';
let username = 'Sanjana';

let oldGreet= myString +" " + "sanjana";
console.log(oldGreet);

let greetMessage = `Hello ${username} !`;
let demo1 = `Value is ${2*2}`;
console.log(greetMessage);
console.log(demo1);

//symbol

let sm1 = Symbol("sanju");
let sm2 = Symbol("sanju");

console.log(sm1 === sm2); 
