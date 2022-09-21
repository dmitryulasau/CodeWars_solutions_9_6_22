var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  }

  let countS = {};
  let countT = {};

  for (let i = 0; i < s.length; i++) {
    countS[s[i]] ? countS[s[i]]++ : (countS[s[i]] = 1);
  }

  for (let i = 0; i < t.length; i++) {
    countT[t[i]] ? countT[t[i]]++ : (countT[t[i]] = 1);
  }

  return (
    Object.entries(countS).sort().toString() ===
    Object.entries(countT).sort().toString()
  );
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("aacc", "ccac"));
