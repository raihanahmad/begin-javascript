// FOR LOOP
for (let funfun = 0; funfun <= 10; funfun++) {
  if (funfun === 5) {
    console.log(`Now this is number ${funfun}`);
    continue;
  }
  if (funfun === 8) {
    console.log(`Breake out the look because is number${funfun}`);
    break;
  }
  console.log(`The number is ${funfun}`);
}
console.clear();


// WHILE LOOP
let = i = (1 - 1);
while (i <= 100) {
  console.log(`Number ${i}`);
  if (i === 100) {
    console.log("Yeah I got hole number what expecting");
  }
  i++;
}
console.clear();

// DO WHILE LOOP
let pop = (5 - 5);
pop = 100;
do {
  console.log(`Number is ${pop}`);
  pop = pop + 1;
} while (pop <= 10);
console.clear();

// FOR LOOP IN ARRAY
const needs = ['Cars', 'Bkies', 'Homes', 'Job'];

for (let dew = 0; dew < needs.length; dew++) {
  console.log(`I need ${needs[dew]}`);
}
console.clear();

// FOREACH LOOP IN ARRAY
needs.forEach(function (need, index) {
  console.log(need + ': ' + index);
});
console.clear();

// MAP
const users = [{
    id: 1,
    name: 'Raihan'
  },
  {
    id: 2,
    name: 'Nasim'
  },
  {
    id: 3,
    name: 'Polash'
  }
];

let ids = users.map(function (user) {
  return `${user.id} ${user.name}`;
})

console.log(ids);
console.clear();

// FOR IN
const man = {
  firstName: 'Raihan',
  lastName: 'Ahmad',
  passion: 'Web Developing'
}

for (let popup in man) {
  console.log(popup + ': ' + man[popup]);
}