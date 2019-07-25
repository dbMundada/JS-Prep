// This problem was inspired by this original tweet by Max Howell:
// Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off.

// So, let's invert a binary tree in Javascript

// Original Tree
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9

// Simple Binary Tree (depth = 3)
var tree = {
  left: {
    left: {
      value: 1
    },
    right: {
      value: 3
    },
    value: 2
  },
  right: {
    left: {
      value: 6
    },
    right: {
      value: 9
    },
    value: 7
  },
  value: 4
}

// Recursive function to return an inverted tree
function invertTree (node) {
  if (!node) return;

  var right = invertTree(node.right);
  var left = invertTree(node.left);
  if (left) node.left = right;
  if (right) node.right = left;
  return node;
}

// Inverted Tree
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

// Log the original tree to the console, followed by the inverted tree
console.log(JSON.parse(JSON.stringify(tree)), invertTree(tree));
