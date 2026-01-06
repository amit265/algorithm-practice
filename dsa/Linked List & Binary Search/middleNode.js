// find middle node of a linked list
//Fast & Slow Pointers
//Key insight:
// One pointer moves twice as fast
// example of linked list node
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function middleNode(head) {
  let slow = head;
  let fast = head;

  // move fast pointer two steps and slow pointer one step
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow; // slow is now at the middle node
}

// time complexity: O(n)
// space complexity: O(1)

// test the function

// helper function to create a linked list from an array
function createLinkedList(arr) {
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// helper function to print linked list from a given node
function printLinkedListFromNode(node) {
  let current = node;
  let result = [];
  while (current !== null) {
    result.push(current.value);
    current = current.next;
  }
  console.log(result.join(" -> "));
}

let list1 = createLinkedList([1, 2, 3, 4, 5]);
let middle1 = middleNode(list1);
printLinkedListFromNode(middle1); // Output: 3 -> 4 -> 5

let list2 = createLinkedList([10, 20, 30, 40]);
let middle2 = middleNode(list2);
printLinkedListFromNode(middle2); // Output: 30 -> 40

let list3 = createLinkedList([7]);
let middle3 = middleNode(list3);
printLinkedListFromNode(middle3); // Output: 7

let list4 = createLinkedList([1, 2]);
let middle4 = middleNode(list4);
printLinkedListFromNode(middle4); // Output: 2
