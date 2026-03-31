// Remove Nth Node From End of List
// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// Two-pointer gap technique

// example of linked list node

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


function removeNthFromEnd(head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let first = dummy;
  let second = dummy;

  // move first pointer n+1 steps ahead
  for (let i = 0; i <= n; i++) {
    first = first.next;
  }

  // move both pointers until first reaches the end
  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  // second is now at the node before the one to be removed
  second.next = second.next.next;

  return dummy.next; // return the head of the modified list
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

// helper function to print linked list
function printLinkedList(head) {
  let current = head;
  let result = [];
  while (current !== null) {
    result.push(current.value);
    current = current.next;
  }
  console.log(result.join(" -> "));
}

let list1 = createLinkedList([1, 2, 3, 4, 5]);
let modifiedList1 = removeNthFromEnd(list1, 2);
printLinkedList(modifiedList1); // Output: 1 -> 2 -> 3 -> 5

let list2 = createLinkedList([10, 20, 30, 40]);
let modifiedList2 = removeNthFromEnd(list2, 4);
printLinkedList(modifiedList2); // Output: 20 -> 30 -> 40

let list3 = createLinkedList([7, 14, 21]);
let modifiedList3 = removeNthFromEnd(list3, 1);
printLinkedList(modifiedList3); // Output: 7 -> 14

let list4 = createLinkedList([1]);
let modifiedList4 = removeNthFromEnd(list4, 1);
printLinkedList(modifiedList4); // Output: (empty list)     

let list5 = createLinkedList([5, 10, 15, 20, 25]);  
let modifiedList5 = removeNthFromEnd(list5, 5);
printLinkedList(modifiedList5); // Output: 10 -> 15 -> 20 -> 25