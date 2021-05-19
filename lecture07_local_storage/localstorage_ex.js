// // ---------- 儲存 ----------
// localStorage.setItem('name', 'DragonChen');
// localStorage.setItem('email', 'dragon@smalldragon.tw');

// // ---------- 取用 ----------
// localStorage.getItem('name');
// localStorage.getItem('email');

// // ---------- 刪除 ----------
// localStorage.removeItem('name');
// localStorage.removeItem('email');

// // 全部刪光光
// localStorage.clear();

// type casting
let num1 = 145.34;
let str = num1.toString();
let num2 = parseFloat(str);
console.log(num1, str, num2);

let obj1 = {a: 'apple', b: 'banana'};
console.log(obj1);

let arr1 = [3, 5, 7, 11, 101];
console.log(arr1);

// storage into localstorage
let str1 = JSON.stringify(obj1);
let str2 = JSON.stringify(arr1);
// localStorage.setItem('obj', str1);
// localStorage.setItem('arr', str2);

// parse
// let obj2 = JSON.parse(str1);
// let arr2 = JSON.parse(str2);