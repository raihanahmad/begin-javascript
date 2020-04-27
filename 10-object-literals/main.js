// Object Literals
const person = {
  firstName: 'Raihan',
  lastName: 'Ahmad',
  age: 19,
  need: ['Car', 'Bike', 'Home'],
  address: {
    homeland: 'koyra',
    city: 'sirajganj'
  },
  birthYear: function () {
    return 2001;
  }
}

let val;
val = person;
val = person['brithday'];
val = person.firstName;
val = person.lastName;
val = person.age;
val = person.need;
val = person.address;
val = person.birthYear();
val = person.need[0];
val = person.address.homeland;

console.log(val);
console.clear();


// Simple loop for string object literals (by the way this is my first loop in js)
const person2 = [{
    name: 'Raihan',
    age: 19,
    type: 'lagende'
  },
  {
    name: 'Nasim',
    age: 21,
    type: 'lagende'
  },
  {
    name: 'Polash',
    age: 20,
    type: 'lagende'
  }
];

for (let lopo = 0; lopo < person2.length; lopo++) {
  console.log(person2[lopo].name);
}