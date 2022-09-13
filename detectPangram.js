// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

// A pangram is a sentence that contains every single letter of
// the alphabet at least once. For example, the sentence
// "The quick brown fox jumps over the lazy dog" is a pangram,
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is,
// False if not. Ignore numbers and punctuation.

function isPangram(string) {
  const alphabet = "qwertyuiopasdfghjklzxcvbnm";
  for (let letter of alphabet) {
    if (!string.toLowerCase().includes(letter)) {
      return false;
    }
  }
  return true;
}

console.log("aaa".includes("b"));
console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));
console.log(isPangram("Cwm fjord bank glyphs vext quiz"));
