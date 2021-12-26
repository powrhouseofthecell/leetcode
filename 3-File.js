// Max depth of a binary tree
const maxDepth = function (root) {
  if (!root) return 0;
  const l = maxDepth(root.left);
  const r = maxDepth(root.right);
  return 1 + Math.max(l, r);
};

// Sorted array to BST
const sortedListToBST = function (head) {
  const buildBST = (nums, start, end) => {
    if (start > end) return null;
    const mid = (start + end) >> 1;
    const root = new TreeNode(nums[mid]);
    root.left = buildBST(nums, start, mid - 1);
    root.right = buildBST(nums, mid + 1, end);
    return root;
  };
  const nums = new Array();
  for (; head != null; head = head.next) {
    nums.push(head.val);
  }
  return buildBST(nums, 0, nums.length - 1);
};

// Best time to buy a stock

const maxProfit = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - prices[i - 1] > 0) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
};

// Reverse words in a string

function reverseWords(str) {
  let words = str.trim().split(/\s+/g);
  words.reverse();
  return words.join(' ');
}
