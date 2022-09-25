let a = [1, 2, 3];

console.log(a);

a.length = 0;
console.log(a);

a.splice(0, a.length);
console.log(a);
