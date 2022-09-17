let input = {
  Tommy: ["JavaScript", "Java"],
  Alex: ["React", "Angular"],
  Borys: ["React", "C++", "Java"],
  Matt: "JavaScript",
};

function getSubject(input) {
  let map = new Map();
  for (let student in input) {
    let languageArray = Array.isArray(input[student])
      ? input[student]
      : [input[student]];

    languageArray.forEach((element) => {
      let names = map.get(element) ? map.get(element) : [];
      names.push(student);
      map.set(element, names);
    });
  }
  return Object.fromEntries(map);
}

console.log(getSubject(input));
