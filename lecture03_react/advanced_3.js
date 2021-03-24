const family = {
    dad: 'Bob',
    mom: 'Mary',
    sons: ['Noob', 'Dragon'],
};

// Call Object.keys function
console.log(Object.keys(family));

// Call Object.values function
console.log(Object.values(family));

console.log(Object.entries(family));

// ----------- Array -----------
console.log('----------- Array -----------');
const arr = [1, 2, 3, 4, 5];

// remember this
arr.forEach(x => console.log(x));

const arr2 = arr.map(x => x * 2);

console.log(arr);
console.log(arr2);

const arr3 = arr.filter(x => x < 3);

console.log(arr3);

console.log('----------- more Array -----------');
const arr4 = arr
    .filter(x => x < 3)
    .map(x => x * 3 + 1);

console.log(arr4);
// [4, 7]

// arr = [1, 2, 3, 4, 5];

console.log(arr.slice(0, 3));
console.log(arr.slice(1, 3));

