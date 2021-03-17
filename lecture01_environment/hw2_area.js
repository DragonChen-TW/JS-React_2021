const pi = 3.14159;

// legacy
function area1(r) {
    return r * r * pi;
}

// arrow version
let area2 = (r) => {
    return r * r * pi;
}

// or the simplest
let area3 = r => r * r * pi;

console.log(area1(3));
console.log(area2(3));
console.log(area3(3));