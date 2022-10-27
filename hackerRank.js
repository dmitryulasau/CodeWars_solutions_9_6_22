function maximumContainers(cost, budget, returns) {
  // Write your code here
  const containersStart = budget / cost;

  let containersCount = containersStart;
  let containersLeft = containersStart;

  while (containersLeft > 0 && containersLeft >= returns) {
    new_returned = Math.floor(containersLeft / returns);
    containersCount += new_returned;

    containersLeft = new_returned + (containersLeft % returns);
  }
  return containersCount;
}

const unit_cost = 1;

const budget = 4;

const return_on_count = 2;

console.log(maximumContainers(unit_cost, budget, return_on_count));

console.log(maximumContainers(2, 10, 5));

console.log(maximumContainers(2, 6, 2));

function foo() {
  return 5;
}

let myVar = foo;

console.log(myVar);

console.log(Boolean(Infinity));
console.log(Number([20, 30]));
console.log(Boolean(""));
console.log(Number(["20"]));

const obj = '{"result":true, "count":42}';

console.log(JSON.parse(JSON.stringify(obj)) === obj);

console.log(JSON.parse(JSON.stringify(obj)) == obj);

function inventoryList() {
  // write your code here
  return {
    items: [],
    add: function (item) {
      if (this.items.includes(item)) {
        return;
      }
      this.items.push(item);
    },
    remove: function (item) {
      if (this.items.includes(item)) {
        let index = this.items.indexOf(item);
        if (index > -1) {
          this.items.splice(index, 1);
        }
      }
    },
    getItems: function () {
      return this.items;
    },
  };
}
