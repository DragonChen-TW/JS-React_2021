// Author:	DragonChen https://github.com/teacher144123/
// Title:	Basic 2 - function and package
// Date:	2021/03/09

// =========== Function ===========
console.log('=========== Function ===========');

// Define function
hi();
function hi() {
    console.log('hi');
}

printName('NoobTW')
function printName(name) {
    console.log('HI, ' + name + ', how are you!');
}

hi();
printName('DragonChen');
printName('NoobTW');

// Something else
const hello = () => {
    console.log('hello');
}
const printNamev2 = name => {
    console.log('HI, ' + name + ', how are you!');
}
hello()
printNamev2('NoobTW');

const printNamev3 = name => console.log('HI, ' + name + ', how are you!');
printNamev3('Apple');



// =========== NPM and Packages ===========
console.log('NPM and Packages');

const md5 = require('md5');
const hash = md5('Apple');
console.log(hash);
