let aa = [3, 4, 5];
console.log(aa);

aa = [10, 11.76, 'abc', 'cat'];
console.log(aa);

aa.push(6);
console.log(aa);

let family = {
    dad: 'Bob',
    mom: 'Mary',
    sons: ['Noob', 'Dragon']
};

console.log(family);
console.log(family.dad);
console.log(family.sons);

family.sons.push('Lucky');
console.log(family.sons);


family.daughters = [];
family.daughters.push('Meng');
console.log(family);


// prac

let g = 10;
let obj = {
    a: 'apple',
    b: [4.13, [3, 3.14], 'banana', {}],
    c: {
        d: 'dad',
        e: [undefined, 'delicious'],
        f: [97, 'e4', {
            g
        }]
    }
};

// 請取出
// 97
// apple 3
// banana delicious