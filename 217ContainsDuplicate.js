// Given an integer array nums, return true if any value appears at least
// twice in the array, and return false if every element is distinct.

// Input: nums = [1, 2, 3, 1];
// Output: true;

// Input: nums = [1, 2, 3, 4];
// Output: false;

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

function containsDuplicate(array) {
  let counts = {};

  for (let i = 0; i < array.length; i++) {
    counts[array[i]] ? counts[array[i]]++ : (counts[array[i]] = 1);
  }

  for (key in counts) {
    if (counts[key] > 1) {
      return true;
    }
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
