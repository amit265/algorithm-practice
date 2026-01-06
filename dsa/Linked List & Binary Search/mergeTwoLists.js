// merge two sorted linked lists and return it as a new sorted list.
// The new list should be made by splicing together the nodes of the first two lists.


// Mental model:
// “Always attach the smaller head.”


// example of linked list node
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeTwoLists(l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.value < l2.value) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  // append the remaining nodes of l1 or l2
  if (l1 !== null) {
    current.next = l1;
  } else {
    current.next = l2;
  }

  return dummy.next; // return the head of the merged list
}

// time complexity: O(n + m) where n and m are the lengths of the two lists
// space complexity: O(1)


// test the function

// helper function to create a linked list from an array
function createLinkedList(arr) {
  if (arr.length === 0) return null;
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

let list1 = createLinkedList([1, 3, 5]);
let list2 = createLinkedList([2, 4, 6]);
let mergedList1 = mergeTwoLists(list1, list2);
printLinkedList(mergedList1); //        Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6

let list3 = createLinkedList([1, 2, 4]);
let list4 = createLinkedList([1, 3, 4]);
let mergedList2 = mergeTwoLists(list3, list4);
printLinkedList(mergedList2); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4
    
let list5 = createLinkedList([]);
let list6 = createLinkedList([0]);
let mergedList3 = mergeTwoLists(list5, list6);
printLinkedList(mergedList3); // Output: 0

let list7 = createLinkedList([5, 10, 15]);  
let list8 = createLinkedList([2, 3, 20]);
let mergedList4 = mergeTwoLists(list7, list8);
printLinkedList(mergedList4); // Output: 2 -> 3 -> 5 -> 10 -> 15 -> 20