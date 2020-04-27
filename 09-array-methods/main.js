// SOME TYPE OF ARRAYS DECLARATION
const num = [29, 10, 49, 28, 100, 44];
const num1 = new Array(49, 29, 83, 43, 54);
const need = ['Job', 'Car', 'Bike', 'Home'];
const mixed = ['Home', 1, null, true, undefined, {
  a: 49,
  b: 844,
  c: 0
}, new Date()];


let val;
// Find array lenght
val = num.length;
// check it is array or not
val = Array.isArray(num);
// get a single value from a array
val = num[0];
val = num[num.length - 1];
// put a value in array
num[0] = 'Raihan';
// find a value position from a array
val = num.indexOf(28);

// POWERFUL METHODS OF ARRAYS
// push a value to last index
num.push(147);
// push a value to first index
num.unshift(99);
// cut out a value from last index
num.pop();
// cut out a value from first index
num.shift();
// cut out any value from anywhere
num.splice(2, 1);
// reverce
num.reverse();
// add another array or concatenat array
val = num.concat(num1);
// sorting
val = num.sort();
val = need.sort();
// compare (function) to sorting smaller to big
val = num1.sort(function (x, y) {
  return x - y;
});
// compare (function) to sorting big to smaller
val = num1.sort(function (x, y) {
  return y - x;
})

// find funtion
function over20(num) {
  return num > 20;
}

val = num.find(over20);

console.log(num);
console.log(val);