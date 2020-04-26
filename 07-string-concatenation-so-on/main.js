const firstName = 'Raihan';
const lastName = 'Ahmad';
const age = 19;
const me = 'I am learning split now';
const skills = 'web development, graphic design, programming';
let val;

// String concatenation
val = firstName + lastName;
val = firstName + ' ' + lastName;
val = 'My name is ' + firstName + '. I am ' + age;

// concat methot
val = firstName.concat(' ', lastName);

// append
val = 'Alpha';
val += ' Coder';

// escaping
val = 'I can\'t stay poor no I can\'t';
val = "I can't stay poor. No I can't";

// length
val = lastName.length;

// upper case and lower case
val = firstName.toUpperCase();
val = lastName.toLocaleLowerCase();

// find letter 
val = firstName[2];

// indexOf
val = firstName.indexOf('n');

// indexOn
val = firstName.lastIndexOf('i');

// charat() 
val = firstName.charAt(5);

// get last letter
val = firstName.charAt(firstName.length - 1);

// substring
val = firstName.substring(0, 2);

// slice
val = firstName.slice(0, 3);
val = firstName.slice(-2);

// split
val = me.split(' ');
val = skills.split(',');

// replece
val = me.replace('split', 'replace');

// include() just for check this word
val = me.includes('bobogaga');


console.log(val);