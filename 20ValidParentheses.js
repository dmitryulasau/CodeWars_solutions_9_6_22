// https://leetcode.com/problems/valid-parentheses/

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

const isValid = function (s) {
  const temp = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      temp.push(")");
    } else if (s[i] === "{") {
      temp.push("}");
    } else if (s[i] === "[") {
      temp.push("]");
    } else if (temp.pop() !== s[i]) {
      return false;
    }
  }

  return !temp.length;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
