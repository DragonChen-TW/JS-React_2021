// Author:	DragonChen https://github.com/teacher144123/
// Title:	Basic 1 - variables and operators
// Date:	2021/03/09

// =========== Variables ===========
console.log('=========== Variables ===========');
// Number
let n1 = 3;
n1 = 10;

const n2 = 3.14;
// n2 = 5; // <-- will cause error

// var n3 = 10; // <-- not suggested

// String
let s;
s = 'DragonChen loves Python and JS';
console.log(s);

s = "Another way";

s = `more advanced way`;

// Boolean
let b = true;
console.log(true, false); // true, false
console.log(true + 1, false + 0); // 2, 0

// null and undefined
let c = null;

let d1;
function add(a, b) { return b; }
let d2 = add(3);

console.log(d1, d2);

// =========== Operator ===========
console.log('=========== Operator ===========');
// +=, -=, *=, /= 基本上和其他語言一模一樣
let a = 10;
a *= 3; // 30
// console.log(a); 

a /= 4; // 7.5
// console.log(a);


// 比較運算子 >, <, !=
console.log(3 > 5);       // false
console.log(10 < 5.6);    // false
console.log(10 < 14.5);   // true
console.log(10 != 'abc'); // true

// !!!!!重點!!!!!
// JS 的 == 和 === 不同
console.log('== vs === 重點');
console.log(1 == 1);    // true
console.log(1 === 1);   // true
console.log(1 == '1');  // true
console.log(1 === '1'); // false