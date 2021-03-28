const mergeKLists = (lists) => {
  if (lists.length === 0) return null;

  const merge = (l1, l2) => {
      let temp = new ListNode(),
          curr = temp;
      while (l1 && l2) {
          if (l1.val < l2.val) {
              curr.next = l1;
              l1 = l1.next;
          } else {
              curr.next = l2;
              l2 = l2.next;
          }
          curr = curr.next;
      }
      curr.next = l1 || l2;
      return temp.next;
  }

  while(lists.length > 1) {
      let a = lists.shift();
      let b = lists.shift();
      const h = merge(a, b)
      lists.push(h)
  }
  return lists[0]
};