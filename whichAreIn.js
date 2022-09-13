// https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript

function inArray(array1, array2) {
  return array1.filter((element) => array2.join(" ").includes(element)).sort();
}

console.log(
  inArray(
    ["arp", "live", "strong"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
); // -> ["arp", "live", "strong"]

console.log(
  inArray(
    ["tarp", "mice", "bull"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
); // -> []
