// Switch Good For multiple condition

const color = 'pink';

switch (color) {
  case 'green':
    console.log('The color is green');
    break;
  case 'blue':
    console.log('the color is blue');
    break;
  case 'pink':
    console.log('the color is pink');
    break;
  case 'black':
    console.log('the color is black');
    break;
  case 'yellow':
    console.log('the color is yellow');
    break;
  default:
    console.log("I don't know what color you choos")
    break;
};

// Great use
let today = new Date();

switch (today.getDay()) {
  case 0:
    console.log('Sunday')
    break;
  case 1:
    console.log('Monday')
    break;
  case 2:
    console.log('Tuesday')
    break;
  case 3:
    console.log('Wednesday')
    break;
  case 4:
    console.log('Thusday')
    break;
  case 5:
    console.log('Friday')
    break;
  case 6:
    console.log('Sunday')
    break;
};