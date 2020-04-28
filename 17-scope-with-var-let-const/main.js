// GLOBAL SCOPE
var a = 1;
let b = 2;
const c = 3;

// function scape
(function () {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log(`The Funtion scape Vlaue Is: ${a} ${b} ${c}`);
})()

// condisional scape also known as block scope
if (true) {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log(`The conditional scape Vlaue Is: ${a} ${b} ${c}`);
}

// loop scape
for (var a = 0; a <= 10; a++) {
  console.log(`The loop Vlaue Is: ${a}`);
}


console.log(`The Global Vlaue Is: ${a} ${b} ${c}`);