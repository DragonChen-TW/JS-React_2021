const a = [1,2,3];
const b = a;
console.log(a);
console.log(b);
console.log(a === b); // true
b.push(4);
console.log(b); // [1, 2, 3, 4]
console.log(a); // [1, 2, 3, 4]

// using immutable method Array.from
const c = Array.from(a);
console.log(a);
console.log(c);
console.log(a === c); // false
c.push(4);
console.log(c); // [1, 2, 3, 4]
console.log(a); // [1, 2, 3]

