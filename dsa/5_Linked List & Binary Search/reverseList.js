// function to reverse a linked list

// what is linked list ?
// A linked list is a linear data structure where each element (node) contains a value and a reference (or pointer) to the next node in the sequence. Unlike arrays, linked lists do not store elements in contiguous memory locations, allowing for efficient insertions and deletions. There are several types of linked lists, including singly linked lists, doubly linked lists, and circular linked lists.

// example of linked list node 

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


function reverseList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let nextTemp = current.next; // store next node
    current.next = prev;         // reverse the link
    prev = current;              // move prev to current
    current = nextTemp;          // move to next node
  }
  return prev; // new head of the reversed list
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
let reversedList1 = reverseList(list1);
printLinkedList(reversedList1); // Output: 5 -> 4 -> 3 -> 2 -> 1

let list2 = createLinkedList([10, 20, 30]);
let reversedList2 = reverseList(list2);
printLinkedList(reversedList2); // Output: 30 -> 20 -> 10

let list3 = createLinkedList([7]);
let reversedList3 = reverseList(list3);
printLinkedList(reversedList3); // Output: 7

let list4 = createLinkedList([]);
let reversedList4 = reverseList(list4);
printLinkedList(reversedList4); // Output: (no output, empty list)