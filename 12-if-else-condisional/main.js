// IF ELSE ESTENMENT
const id = 100;
const st = '100';

// check anything. string and number with ==
if (id == 10) {
  console.log('RIGHT ANS:');
} else {
  console.log('WRONG ANS:');
}
if (st == 100) {
  console.log('RIGHT ANS:');
} else {
  console.log('WRONG ANS:');
}
console.clear();

// check anything. string and number with !=
if (id != 10) {
  console.log('RIGHT ANS:');
} else {
  console.log('WRONG ANS:');
}
if (st != 100) {
  console.log('RIGHT ANS:');
} else {
  console.log('WRONG ANS:');
}
console.clear();

// specific check. string and number with ===
if (id === 100) {
  console.log('RIGHT ANS:');
} else {
  console.log('WRONG ANS:');
}
if (id !== 100) {
  console.log('RIGHT ANS:');
} else {
  console.log('WRONG ANS:');
}
if (st === '100') {
  console.log('RIGHT ANS:');
} else {
  console.log('WRONG ANS:');
}
console.clear();

// check undefined with typeof
if (typeof id !== 'undefined') {
  console.log(`ID is ${id}`);
} else {
  console.log('Here is no id');
}

grater then or lass then
const person = {
  name: 'Raihan',
  age: 19
}
if (person.age > 18) {
  console.log(`${person.name} is Adult`);
} else {
  console.log(`${person.name} is Kids`);
}
if (person.age < 18) {
  console.log(`${person.name} is Kids`);
} else {
  console.log(`${person.name} is Adult`);
}
if (person.age >= 18) {
  console.log(`${person.name} is Adult`);
} else {
  console.log(`${person.name} is Kids`);
}

// Else If condition
const color = 'purple';

if (color === 'yellow') {
  console.log('The color is yellow');
} else if (color === 'red') {
  console.log('The color is red');
} else if (color === 'blue') {
  console.log('The color is blue');
} else if (color === 'pink') {
  console.log('The color is pink');
} else if (color === 'black') {
  console.log('The color is black');
} else {
  console.log("I don't know what color you choos");
}

// losical oparetors
const person = {
  name: 'Raihan',
  age: 19
}

if (person.age <= 12 && person.age >= 1) {
  console.log(`${person.name} You are a child.`);
} else if (person.age <= 18 && person.age >= 12) {
  console.log(`${person.name} You are a teenager.`);
} else if (person.age >= 18) {
  console.log(`${person.name} You are a adult.`);
} else {
  console.log(`${person.name} You mesed up something.`);
}

losical oparator || = or
const age = 19;
if (age < 18 || age > 65) {
  console.log('you can not do this');
} else {
  console.log('you can do this');
}

// sorthand way
console.log(id === 100 ? 'Right' : 'Wrong');
console.log(st === 100 ? 'Right' : 'Wrong');
console.log(st === '100' ? 'Right' : 'Wrong');


curly braces are
if (id == 10)
  console.log('RIGHT ANS:');
else
  console.log('WRONG ANS:');

if (st == 100)
  console.log('RIGHT ANS:');
else
  console.log('WRONG ANS:');