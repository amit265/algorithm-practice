// Detect cycle in a linked list using Floyd's Tortoise and Hare algorithm

//      example of linked list node

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function hasCycle(head) {
  let slow = head;
  let fast = head;

  // move fast pointer two steps and slow pointer one step
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    // if slow and fast meet, there is a cycle
    if (slow === fast) {
      return true;
    }
  }
  return false; // no cycle
}

// time complexity: O(n)
// space complexity: O(1)

// test the function

// helper function to create a linked list from an array
function createLinkedList(arr, pos) {
  let head = new ListNode(arr[0]);
  let current = head;
  let cycleEntry = null;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
    if (i === pos) {
      cycleEntry = current;
    }
  }

  // create cycle if pos is valid
  if (pos !== -1) {
    current.next = cycleEntry;
  }

  return head;
}

let list1 = createLinkedList([3, 2, 0, -4], 1);
console.log(hasCycle(list1)); // Output: true

let list2 = createLinkedList([1, 2], 0);
console.log(hasCycle(list2)); // Output: true

let list3 = createLinkedList([1], -1);
console.log(hasCycle(list3)); // Output: false

let list4 = createLinkedList([1, 2, 3, 4, 5], -1);
console.log(hasCycle(list4)); // Output: false

let list5 = createLinkedList([], -1);
console.log(hasCycle(list5)); // Output: false
