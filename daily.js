// You are given an array containing two strings. The strings contain keypresses
// of printable characters and "-B" separated by commas. "-B" is considered
// a backspace. Return true if the strings form the same word, return False if not.

// Example input:
// input = ["c,a,r,d","c,a,r,-B,r,d"]
// output: True
// Explained: As we type out the first string, we just type 'c','a','r','d'
// to make the word 'card'. The second keypresses are 'c', 'a', 'r', backspace,
// 'r', 'd'. Both of these sets of keypresses will give us the word "card".

// function check(array) {
//   let resultFirst = [];
//   let resultSecond = [];

//   // In terms of the task we have TWO strings and we can represent them as array
//   let wordArray1 = array[0].split(","); // [ 'c', 'a', 'r', 'd' ]
//   let wordArray2 = array[1].split(","); // [ 'c', 'a', 'r', '-B', 'r', 'd' ]

//   // LOOP trough the wordArray1 and check if we have backspace '-B':
//   // if so we are deleting last element in resultFirst array
//   // if not pushing current element in resultFirst array
//   for (let i = 0; i < wordArray1.length; i++) {
//     if (wordArray1[i] === "-B") {
//       resultFirst.pop();
//     } else {
//       resultFirst.push(wordArray1[i]);
//     }
//   }

//   // The same LOOP for wordArray2
//   for (let i = 0; i < wordArray2.length; i++) {
//     if (wordArray2[i] === "-B") {
//       resultSecond.pop();
//     } else {
//       resultSecond.push(wordArray2[i]);
//     }
//   }

//   // Compare two strings
//   return resultFirst.join("") === resultSecond.join("");
// }

// console.log(check(["c,a,r,d", "c,a,r,-B,r,d"]));

////////////////////////////////////////////////////////////////////////////////
// Given an array nums containing n distinct numbers in the range [0, n],
// return the only number in the range that is missing from the array.

// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in
// the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

// function missing(array) {
//   temp = [];
//   for (let i = 0; i <= array.length; i++) {
//     temp.push(i);
//   }

//   for (const missing of temp) {
//     if (array.indexOf(missing) === -1) {
//       return missing;
//     }
//   }
// }

// console.log(missing([3, 0, 1]));
// console.log(missing([0, 1]));
// console.log(missing([9, 6, 4, 2, 3, 5, 7, 0, 1]));

console.log(`============== DAILY 9-12-2022 ==============`);
// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.
// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:
// -231 <= x <= 231 - 1

// Follow up: Could you solve it without converting the integer to a string?
// return number === Number(number.toString().split("").reverse().join(""));

function isPalindrome(number) {
  return number === Number([...`${number}`].reverse("").join(""));
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(2));
console.log(isPalindrome(11));
