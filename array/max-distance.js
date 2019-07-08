/*
  https://www.geeksforgeeks.org/given-an-array-arr-find-the-maximum-j-i-such-that-arrj-arri/

  Given an array arr[], find the maximum j – i such that arr[j] > arr[i]

  Input: {34, 8, 10, 3, 2, 80, 30, 33, 1}
  Output: 6  (j = 7, i = 1)

  Input: {9, 2, 3, 4, 5, 6, 7, 8, 18, 0}
  Output: 8 ( j = 8, i = 0)

  Input:  {1, 2, 3, 4, 5, 6}
  Output: 5  (j = 5, i = 0)

  Input:  {6, 5, 4, 3, 2, 1}
  Output: -1
*/
// O(n^2) solution
module.exports = {
 //param A : array of integers
 //return an integer
    maximumGap : function(A){
        var max = 0;

        for (var i = 0; i < A.length; i++) {
            for (var j = i + 1; j < A.length; j++) {
                if (A[i] <= A[j]) {
                    max = Math.max(max, j - i);
                }
            }
        }
        return max;
    }
};


/*
Method 2 O(nLgn)
----------------------------------------
Use hashing and sorting to solve this problem in less than quadratic complexity after taking special
care of the duplicates.

Approach :
- Traverse the array and store the index of each element in a list (to handle duplicates).
- Sort the array.
- Now traverse the array and keep track of the maximum difference of i and j.
- For j consider the last index from the list of possible index of the element and for i consider the
first index from the list. (As the index were appended in ascending order).
- Keep updating the max difference till the end of array.
*/
