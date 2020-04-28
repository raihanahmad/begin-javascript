// WINDOW OBJECT AND METHODS

// show something in console panel
console.log(1);
console.log('Raihan Ahmad');

// alert
alert('Hellow World');

// promt
let something = prompt();
console.log(something);
alert(something);

// confirm
if (confirm('Are you sure about that')) {
  console.log('Yes');
} else {
  console.log('No');
}

let val;

// outter window height and width
val = window.outerHeight;
val = window.outerWidth;

// outter window height and width
val = window.innerHeight;
val = window.innerWidth;

// scroll check
val = window.scrollX;
val = window.scrollY;

// location object
val = window.location;
val = window.location.host;
val = window.location.href;
val = window.location.port;
val = window.location.protocol;
val = window.location.search;

// rederect 
// window.location.href = 'http://google.com';

// reload
// window.location.reload();

// history
// window.history.go(2);
val = window.history.length;

// navigator objects
val = window.navigator;
val = window.navigator.appVersion;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.userAgent;
val = window.navigator.language;



console.log(val);