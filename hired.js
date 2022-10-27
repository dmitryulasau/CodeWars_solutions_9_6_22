// const solution = (numbers) => {
//   return numbers.reduce((acc, cur) => {
//     return acc > cur ? acc : cur;
//   });
// };

// console.log(solution([-2, 0, 10, 1]));

const solution = (prices) => {
  // Type your solution here
  let profit = 0;
  let buy = 0;
  let sell = 0;
  let index = true;

  for (let i = 0; i < prices.length; i++) {
    if (index) {
      buy = prices[i];
      sell = prices[i + 1];
    }

    if (sell < buy) {
      index = true;
      continue;
    } else {
      let pocket = sell - buy;
      if (pocket > profit) {
        profit = pocket;
      }
      index = false;
    }
  }
  return profit;
};

console.log(solution([6, 0, -1, 10]));
console.log(solution([13, 10, 8, 4, 10]));

const y = (a) => {
  return (b) => {
    return a % b;
  };
};

const x = y(2)(2);

console.log(typeof x);

const timer = {
  secondsLeft: 1000,
  addSeconds: (s) => {
    this.secondsLeft += s;
  },
  removeSeconds: (s) => {
    this.secondsLeft -= s;
  },
};

timer.addSeconds(100);
timer.addSeconds(10);
timer.removeSeconds(50);

console.log(timer.secondsLeft);

function myFunc(obj) {
  return obj.a + obj.b + obj.c;
}

var obj = { a: 1, b: 3, c: 5 };
var obj2 = { ...obj, c: 4, d: 1, e: -3 };
console.log(myFunc(obj2));

let arr = [10, 5, 10, 5];
let set = new Set(arr);
console.log(Array.from(set));
