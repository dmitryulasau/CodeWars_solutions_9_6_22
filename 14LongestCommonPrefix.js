// https://leetcode.com/problems/longest-common-prefix/

let longestCommonPrefix = function (strs) {
  let result = "";

  if (strs == null || strs.length == 0) {
    return result;
  }

  if (strs.length === 1 && strs[0].toLowerCase() === strs[0].toUpperCase()) {
    return result;
  } else if (
    strs.length === 1 &&
    strs[0].toLowerCase() != strs[0].toUpperCase()
  ) {
    return strs[0];
  }

  let minWordLength = strs.reduce((acc, cur) =>
    acc.length < cur.length ? acc : cur
  ).length;

  for (let i = 0; i <= minWordLength; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] != strs[0][i]) {
        return result;
      }
    }
    result += strs[0][i];
  }
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["flower"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix([","]));
