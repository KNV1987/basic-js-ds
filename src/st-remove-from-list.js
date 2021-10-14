const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */
 function ListNode(x) {
  this.value = x;
  this.next = null;
}
module.exports = function removeKFromList(l, k) {
  let arr = [];
  while (l) {
    arr.push(l.value);
    l = l.next;
  }
  const arrFilter = arr.filter((el) => el !== k);
  return arrFilter.reverse().reduce((acc, el) => {
    if (acc) {
      const current = new ListNode(el);
      current.next = acc;
      return current;
    }
    return new ListNode(el);
  }, null)
}
