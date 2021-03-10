// Author:	DragonChen https://github.com/teacher144123/
// Title:	Basic 2 - function and package
// Date:	2021/03/09

// =========== Function ===========
console.log('=========== Function ===========');

function hi() {
    console.log('hi');
}
function printName(name) {
    console.log('HI, ' + name + ', how are you!');
}

hi();
printName('DragonChen');
printName('NoobTW');

const hello = () => {
    console.log('hello');
}
const printNamev2 = name => {
    console.log('HI, ' + name + ', how are you!');
}
hello()
printNamev2('NoobTW');

// =========== NPM and Packages ===========
console.log('NPM and Packages');

const md5 = require('md5');

console.log(md5('message'));
