console.log("----------------- 1 -----------------");
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
  let counts = {};

  for (let i = 0; i < arr.length; i++) {
    counts[arr[i]] ? counts[arr[i]]++ : (counts[arr[i]] = 1);
  }

  for (let key in counts) {
    if (counts[key] === 1) {
      return Number(key);
    }
  }
}

console.log(findUniq([1, 0, 0])); // 1);
console.log(findUniq([0, 1, 0])); // 1);
console.log(findUniq([0, 0, 1])); // 1);
console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2);
console.log(findUniq([1, 1, 2, 1, 1])); // 2);
console.log(findUniq([3, 10, 3, 3, 3])); // 10);

console.log("----------------- 2 -----------------");
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

function solution(str) {
  if (str.length % 2 === 1) {
    str += "_";
  } else if (str === "") {
    return [];
  }

  strArray = str.split("");

  for (let i = 2; i < strArray.length; i += 3) {
    strArray.splice(i, 0, " ");
  }

  return strArray.join("").split(" ");
}

console.log(solution("abcdef")); // ["ab", "cd", "ef"]
console.log(solution("abcdefg")); // ["ab", "cd", "ef", "g_"]
console.log(solution("")); // []

console.log("----------------- 3 -----------------");
// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

function zero() {
  return 0;
}
function one() {
  return 1;
}
function two() {
  return 2;
}
function three() {
  return 3;
}
function four() {
  return 4;
}
function five() {
  return 5;
}
function six() {
  return 6;
}
function seven() {
  return 7;
}
function eight() {
  return 8;
}
function nine() {
  return 9;
}

function plus(number) {
  return number++;
}
function minus() {
  return "-";
}
function times() {
  return "*";
}
function dividedBy() {
  return "/";
}

console.log(seven(times(five()))); // 35);
console.log(four(plus(nine()))); // 13);
console.log(eight(minus(three()))); // 5);
console.log(six(dividedBy(two()))); // 3);

console.log("----------------- 4 -----------------");
// Write a function that takes in a non-empty array of integers and returns
// an array of the same length, where each element in the output array is equal to the product of every other number in the input array.
// In other words, the value at output[i] is equal to the product of every number in the input array other than input[i].
// NOTE: You're expected to solve this problem without using division.
// Most Efficient: O(n) Time | O(n) Space

// Case 1:
// Input: arr = [5, 1, 4, 2]
// Output: [8, 40, 10, 20]
// Explained:
// // 8 is equal to 1 x 4 x 2
// // 40 is equal to 5 x 4 x 2
// // 10 is equal to 5 x 1 x 2
// // 20 is equal to 5 x 1 x 4
// Case 2:
// Input: arr = [1, 8, 6, 2, 4]
// Output: [384, 48, 64, 192, 96]

function newA(array) {
  let newArray = [];

  let productArray = 1;
  for (let i = 0; i < array.length; i++) {
    productArray = productArray * array[i];
  }

  //   let arrayProduct = array.reduce((acc, curr) => acc * curr);

  for (let i = 0; i < array.length; i++) {
    newArray.push(productArray / array[i]);
  }
  return newArray;
}

console.log(newA([5, 1, 4, 2]));
console.log(newA([1, 8, 6, 2, 4]));
