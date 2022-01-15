const addTwoNumbers = function (l1, l2) {
   let head = new ListNode(0);
   let cur = head;
   let curry = 0;

   while (true) {
      let sum = curry;
      sum += l1 ? l1.val : 0;
      sum += l2 ? l2.val : 0;
      cur.val = sum % 10;
      curry = parseInt(sum / 10);
      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next;
      if (l1 != null || l2 != null) {
         cur.next = new ListNode(0);
         cur = cur.next;
      } else {
         break;
      }
   }
   if (curry != 0) {
      cur.next = new ListNode(0);
      cur = cur.next;
      cur.val = curry;
   }
   return head;
};
