function sumK(array, k) {
  // LOOP O(n^2) // *
  //   let temp = [];
  //   for (let i = 0; i < array.length; i++) {
  //     for (let j = i + 1; j < array.length; j++) {
  //       if (array[i] + array[j] === k) {
  //         temp.push(array[i], array[j]);
  //         return temp;
  //       }
  //     }
  //   }
  //   return [];
  // HASH SET O(n) // *
  //   let result = [];
  //   let set = new Set();
  //   for (let i = 0; i < array.length; i++) {
  //     let numberTOFind = k - array[i];
  //     if (set.has(numberTOFind)) {
  //       result.push(numberTOFind, array[i]);
  //       return result;
  //     }
  //     set.add(array[i]);
  //   }
  //   return [];
  // BINARY SEARCH // *
  //   let result = [];
  //   for (let i = 0; i < array.length; i++) {
  //     numberToFind = k - array[i];
  //     let left = 0;
  //     let right = array.length - 1;
  //     while (left < right) {
  //       let mid = Math.floor((left + right) / 2);
  //       if (array[mid] === numberToFind) {
  //         result.push(array[i], array[mid]);
  //         return result;
  //       } else if (numberToFind < array[mid]) {
  //         right = mid - 1;
  //       } else {
  //         left = mid + 1;
  //       }
  //     }
  //   }
  //   return [];
  // TWO POINTER // *
  let left = 0;
  let right = array.length - 1;
  let result = [];
  while (left < right) {
    if (array[left] + array[right] === k) {
      result.push(array[left], array[right]);
      return result;
    } else if (array[left] + array[right] < k) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}

console.log(sumK([-3, 0, 2, 4, 5], 7)); // -> [2, 5]
console.log(sumK([-3, -1, 0, 2, 6], 6)); // -> [0, 6]
console.log(sumK([2, 4, 5], 8)); // -> []
console.log(sumK([-2, -1, 1, 2], 0)); // -> [-2, 2]
