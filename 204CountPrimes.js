// https://leetcode.com/problems/count-primes/

// Given an integer n, return the number of prime numbers that are strictly less than n.

// Example 1:
// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

// Example 2:
// Input: n = 0
// Output: 0

// Example 3:
// Input: n = 1
// Output: 0

var countPrimes = function (n) {
  var isPrime = function (n) {
    if (n < 2) {
      return false;
    }

    if (n === 2) {
      return true;
    }

    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };

  primes = [];

  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes.length;
};

// console.log(isPrime(10));
// console.log(isPrime(9));
// console.log(isPrime(5));
// console.log(isPrime(2));
// console.log(isPrime(7));

console.log(countPrimes(10));
console.log(countPrimes(0));
console.log(countPrimes(1));
console.log(countPrimes(2));
