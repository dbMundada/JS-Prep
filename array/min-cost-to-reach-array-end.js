/*
  Minimum cost to reach end of array array when a maximum jump of K index is allowed
   -----------------------------------------------------------------------------------
  Given an array arr[] of N integers and an integer K, one can move from an index i
  to any other j if j ≤ i + k. The cost of moving from one index i to the other index
  j is abs(arr[i] – arr[j]). Initially we start from the index 0 and we need to
  reach the last index i.e. N – 1. The task is to reach the last index in the
  minimum cost possible.

  Input: arr[] = {10, 30, 40, 50, 20}, k = 3
  Output: 30
    0 -> 1 -> 4
    the total cost will be: |10-30| + |30-20| = 30

  Input: arr[] = {40, 10, 20, 70, 80, 10}, k = 4
  Output: 30

  Approach: The problem can be solved using Dynamic Programming. We start from index 0
  and we can visit any of the index from i+1 to i+k, hence the minimum cost of all
  the paths will be stored in dp[i]. Once we reach N-1, it will be our base case.
  Use memoization to memoize the states, so that we do not need to revisit the state
  again to reduce complexity.

  Time Complexity: O(N * K)
  Auxiliary Space: O(N)
*/

function findMinimumCost(arr, k, index, dp) {
  if (arr.length - 1 === index) {
    return 0;

  } else if (dp[index] !== -1) {
    return dp[index];

  } else {
    let ans = 10000000;

    for (var i = 1; i <= k; i++) {
      if (index + i < arr.length) {
        ans = Math.min(
          ans,
          Math.abs(arr[index + i] - arr[index]) + findMinimumCost(arr, k, index + i, dp)
        );
      } else {
        break;
      }
    }
    dp[index] = ans;
    return ans;
  }
}

function first(arr, k) {
  // memoization Array
  let dp = (new Array(arr.length)).fill(-1);
  console.log(dp);
  console.log(findMinimumCost(arr, k, 0, dp));
}

first([10, 30, 40, 50, 20], 3); // 30
first([40, 10, 20, 70, 80, 10], 2); // 130
