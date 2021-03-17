// Author:	DragonChen https://github.com/teacher144123/
// Title:	Basic 2 - function and package
// Date:	2021/03/09

// =========== Function ===========
const { get } = require('axios');

// // will cause error
// console.log('start');
// const a = get('https://api.noob.tw/test.json');
// console.log(a);
// console.log('end');

// use callback
console.log('start');
get('http://api.noob.tw/test.json', (a) => {
    console.log(a);
});
console.log('end');

// callback 缺點
register(user, pass, () => {
    login(user, pass, (session) => {
        session.download((file) => {
            console.log(file);
        });
    });
});

// =========== Promise ===========
// promise
console.log('start');
get('https://api.noob.tw/test.json')
    .then((response) => {
        console.log(response);
        console.log('end');
    });

// chain up Promise
register(user, pass)
    .then(() => {
        return login(user, pass);
    })
    .then((session) => {
        return session.download();
    })
    .then((file) => {
        console.log(file);
    });

