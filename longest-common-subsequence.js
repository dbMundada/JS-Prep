/*
  Write a simple function that takes two strings, s1 and s2
  and returns the longest common subsequence of s1 and s2

  "ABAZDC", "BACBAD" => "ABAD"
  "aaaa", "aa" => "aa"

  Edge cases:
    1. Case Sensitivity [Character to character comparision]
    2. Empty String will return Empty string
*/

// Top Down Approach
int LCS(i, j) {
  // For end of any string return 0
  if (i >= A.length || j >= B.length) {
    return 0;

  } else if (A[i] === B[j]) {
    return 1 + LCS(i+1, j+1);

  } else {
    return MAX(LCS(i+1, j), LCS(i, j+1));
  }
}


// Above approach have time complexity: O(2^n)
// With memorization we can store values in m*n matrix & time complexity reduces to O(m*n)


// With Dynamic Programming Approach
// Dynamic Programming uses bottom-up approach
function LCS(i, j) {
  if (A[i] === B[j]) {
    LCS[i, j] = 1 + LCS[i-1, j-1];
  } else {
    LCS[i, j] = MAX(LCS(i-1, j), LCS(i, j-1))
  }
}
