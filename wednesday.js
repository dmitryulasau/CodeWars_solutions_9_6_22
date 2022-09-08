console.log("----------------- 1 -----------------");
// Get the Middle Character
// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
function getMiddle(s) {
  let left = 1;
  let right = s.length;

  let array = s.split("");

  while (array.length > 2) {
    array.shift(left - 1);
    array.pop(right - 1);
    console.log(array);
    left++;
    right--;
  }

  return array.join("");
}

console.log(getMiddle("test")); // ->"es"
console.log(getMiddle("testing")); // ->"t"
console.log(getMiddle("middle")); // ->"dd"
console.log(getMiddle("A")); // ->"A"

console.log("----------------- 2 -----------------");
// Equal Sides Of An Array
// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function findEvenIndex(arr) {
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < arr.length; i++) {
    rightSum += arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    rightSum -= arr[i];
    if (leftSum === rightSum) {
      return i;
    } else {
      leftSum += arr[i];
    }
  }
  return -1;

  console.log(rightSum);
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // -> 3
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // -> 1
console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // -> -1
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); // -> 3
