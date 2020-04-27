// DATE AND TIME
const today = new Date();
let birthDate = new Date('12-2-2001 10:38:48');
birthDate = new Date('12/2/2001 10:38:48');
birthDate = new Date('December 03 2001 10:38:48');


let val;
val = today.getFullYear();
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getHours();
val = today.getTime();
val = today.getMinutes();
val = today.getMilliseconds();
val = today.getSeconds();

birthDate.setFullYear(1999);
birthDate.setMonth(0);
birthDate.setHours(12);
birthDate.setMinutes(32);

console.log(birthDate);