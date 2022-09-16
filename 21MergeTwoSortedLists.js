// https://leetcode.com/problems/merge-two-sorted-lists/

var mergeTwoLists = function (list1, list2) {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  if (list1.val < list2.val) console.log(list1.val);
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
