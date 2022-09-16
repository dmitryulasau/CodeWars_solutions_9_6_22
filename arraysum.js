const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

console.log(sum(array));
