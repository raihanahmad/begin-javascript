// DATATYPE CONVERSION OR CONVART

// anything to string
// number to string
let conversion = String(369);
conversion = String(8 * 8);

// boolean to string
conversion = String(false);
conversion = String(true);

// date to string
conversion = String(new Date());

// another way to convert string toString
conversion = (true).toString();
conversion = (345 + 5).toString();
// console.log(conversion.length)

// string to number
conversion = Number('raihan');
conversion = Number('90');
conversion = Number(true);
conversion = Number(false);
conversion = Number(null);
conversion = Number(new Date());

conversion = parseInt('5222.33');
conversion = parseFloat("4848.49");

console.log(conversion);
console.log(typeof conversion);
console.log(conversion.toFixed(5));
console.clear();

// TYPECOORSION
const val1 = String(8);
const val2 = 2;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);