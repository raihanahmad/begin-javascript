// there are 3 type of variable in JS
// these are var, let and const
// for variabel we can use number leatter _ and $ . we can not start a variable with number

// var variable declaration just like c programing
// for string we can use '' single cotation or "" cotation. it's pretty much same
var name = "Raihan";
console.log(name);
name = "Ahamd";
console.log(name);

// undefined variable (it will defined when i use if else condition)
var greeting;
console.log(greeting);
greeting = 'somthing good';
console.log(greeting);
console.clear();

// let variables pretty much same var
let food = "Apple";
console.log(food);
food = 'mango';
console.log(food);
console.clear();

// multi word variables 
// let firstName; // camel case
// var first_name; // underscore
// let FirstName; // pascel case
// var firstname; // small case
// console.clear();


// const variable deffrent then any other variables. const variable's value we can't change
const firstName = 'Raihan';
console.log(firstName);
// firstName = 'Ahmad'; // we can't do that
console.log(firstName);
// const greeting; we can't do that
console.clear();

// what we can do with const variable
const person = {
  name: "raihan",
  age: 19,
  profetion: 'coder',
}
console.log(person);

// we can change this way
person.name = "Ahmad";
console.log(person);

// number
const bestNumber = [2, 4, 5];
console.log(bestNumber);

// we can change these way
bestNumber.push = (49);
console.log(bestNumber);