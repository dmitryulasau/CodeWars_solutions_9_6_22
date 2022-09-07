console.log("----------------- 1 -----------------");
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

function accum(s) {
  let newString = "";
  let temp = [];

  let sArr = s.split("");
  for (let i = 0; i < sArr.length; i++) {
    temp.push(sArr[i].repeat(i + 1));
  }

  return temp
    .map((element) => {
      return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    })
    .join("-");
}

console.log(accum("abcd")); //-> "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); //-> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt")); //-> "C-Ww-Aaa-Tttt"

console.log("----------------- 2 -----------------");
// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript
var isSquare = function (n) {
  if (n < 0) {
    return false;
  }

  for (let i = 0; i <= n; i++) {
    if (i * i === n) {
      return true;
    }
  }
  return false;
};

console.log(isSquare(25));
console.log(isSquare(0));

console.log("----------------- 3 -----------------");
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

function filter_list(array) {
  return array.filter((element) => typeof element == "number");
}

console.log(filter_list([1, 2, "a", "b"])); //== [1, 2];
console.log(filter_list([1, "a", "b", 0, 15])); //== [1, 0, 15];
console.log(filter_list([1, 2, "aasf", "1", "123", 123])); //== [1, 2, 123];

console.log("----------------- 4 -----------------");
// https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(string) {
  let alpha = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  let result = [];
  for (let i = 0; i < string.length; i++) {
    for (let key in alpha) {
      if (string[i].toLowerCase() == key) {
        result.push(alpha[key].toString());
      }
    }
  }
  return result.join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

console.log("----------------- 5 -----------------");
// https://www.codewars.com/kata/5552101f47fc5178b1000050

function digPow(number, p) {
  k =
    number
      .toString()
      .split("")
      .map((element, index) => element ** (index + p))
      .reduce((acc, cur) => acc + cur) / number;

  return k % 1 == 0 ? k : -1;
}

console.log(digPow(89, 1));
console.log(digPow(46288, 3));
