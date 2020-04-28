// MANY WAY TO FUNTION DECLARATIONS
function funfun(firstName = 'Nasim', lastName = 'Uddin') {
  // console.log('Hellow World!');
  // if (typeof firstName === 'undefined') {
  //   firstName = 'Nasim'
  // };
  // if (typeof lastName === 'undefined') {
  //   lastName = 'Uddin'
  // };
  // return `Hellow ${name}`;
  return 'Hellow ' + firstName + ' ' + lastName;
}

console.log(funfun('Raihan', 'Ahmad'));


// ANORMUS FUNTION EXPRETION
const squrte = function (x = 1) {
  return x * x;
};

console.log(squrte(5));

// IMIDIAT FUNTION
(function (name = 'Nasim') {
  console.log(`This is ${name}`)
})('Raihan')

// OBJECT FUNTION (METHODS)
const todo = {
  name: 'Raihan',
  lastName: function () {
    return 'Ahmad';
  },
  work: function (x = 'Web Developing') {
    console.log(`Your work is ${x}`);
  }
}

// another way to put in object
todo.need = function () {
  console.log('Car', 'Bke', 'Home' + ' ' + 'Job');
}

console.log(todo.lastName())
todo.work();
todo.need();