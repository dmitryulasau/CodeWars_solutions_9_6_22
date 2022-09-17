// const myMap = new Map([
//   ["name", "John"],
//   ["surname", "Doe"],
// ]);

// console.log(myMap);

// const myObject = {};
const a = {};
const b = {};

const myMap = new Map([
  [{}, "a"],
  [{}, "b"],
]);

myMap.set({}, "c");

console.log(myMap);
