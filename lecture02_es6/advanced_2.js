// Author:	DragonChen https://github.com/teacher144123/
// Title:	L02 - advanced JS - for and while
// Date:	2021/03/17

// default param of function
function get_area(r, pi=3.14159) {
    // console.log(r, pi);
    return r * r * pi;
}
let ans = get_area(3, 3.25);
// console.log(ans);

// for and while
let lottery = [14, 8, 49, 63];
for (let i = 0; i < lottery.length; i++) {
    const lot = lottery[i];
    console.log(lot);
}

// Array.forEach()
lottery.forEach(lot => {
    console.log(lot);
});

// 不能 break 也不能 return
for (var index in lottery) {
    console.log(index, typeof(index));
    console.log(lottery[index]);
}
// 不要用 盡量

// better ES6!
for (lot of lottery) {
    console.log(lot);
}


let x = 0, n = 5;
while (n > 0) {
    x += n;
    n--;
}
console.log();
console.log(x);

x = 0
n = 5
do {
    x += n;
    n--;
} while (n > 10);
console.log();
console.log(x);