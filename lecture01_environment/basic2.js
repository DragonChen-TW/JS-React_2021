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

hi = () => {
    console.log('hi');
}
printName = name => {
    console.log('HI, ' + name + ', how are you!');
}
hi()
printName('NoobTW');

// =========== NPM and Packages ===========
print('NPM and Packages');

const md5 = require('md5');

console.log(md5('message'));