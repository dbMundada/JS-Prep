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



(function (exports) {
  'use strict';
  exports.longestCommonSubsequence = (function () {
    /**
     * Find the lengths of longest common sub-sequences
     * of two strings and their substrings.
     *
     * Complexity: O(MN).
     *
     * @private
     * @param {String} first string
     * @param {String} second string
     * @return {Array} two dimensional array with LCS
     * lengths of input strings and their substrings.
     *
     */
    function getLcsLengths(str1, str2) {
      var result = [];
      for (var i = -1; i < str1.length; i = i + 1) {
        result[i] = [];
        for (var j = -1; j < str2.length; j = j + 1) {
          if (i === -1 || j === -1) {
            result[i][j] = 0;
          } else if (str1[i] === str2[j]) {
            result[i][j] = result[i - 1][j - 1] + 1;
          } else {
            result[i][j] = Math.max(result[i - 1][j], result[i][j - 1]);
          }
        }
      }
      return result;
    }
    /**
     * Find longest common sub-sequences of two strings.
     *
     * Complexity: O(M + N).
     *
     * @private
     * @param {String} first string
     * @param {String} second string
     * @return {Array} two dimensional array with LCS
     * lengths of input strings and their substrings
     * returned from 'getLcsLengths' function.
     *
     */
    function getLcs(str1, str2, lcsLengthsMatrix) {
      var execute = function (i, j) {
        if (!lcsLengthsMatrix[i][j]) {
          return '';
        } else if (str1[i] === str2[j]) {
          return execute(i - 1, j - 1) + str1[i];
        } else if (lcsLengthsMatrix[i][j - 1] > lcsLengthsMatrix[i - 1][j]) {
          return execute(i, j - 1);
        } else {
          return execute(i - 1, j);
        }
      };
      return execute(str1.length - 1, str2.length - 1);
    }
    /**
     * Algorithm from dynamic programming. It finds the longest
     * common sub-sequence of two strings. For example for strings 'abcd'
     * and 'axxcda' the longest common sub-sequence is 'acd'.
     *
     * @example
     * var subsequence = require('path-to-algorithms/src/searching/'+
     * 'longest-common-subsequence').longestCommonSubsequence;
     * console.log(subsequence('abcd', 'axxcda'); // 'acd'
     *
     * @public
     * @module searching/longest-common-subsequence
     * @param {String} first input string.
     * @param {String} second input string.
     * @return {Array} Longest common subsequence.
     */
    return function (str1, str2) {
      var lcsLengthsMatrix = getLcsLengths(str1, str2);
      return getLcs(str1, str2, lcsLengthsMatrix);
    };
  })();
})(typeof window === 'undefined' ? module.exports : window);
