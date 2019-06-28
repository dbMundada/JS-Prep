function o(res) {
  console.log(res);
}
//------------------------------------------------------------------------
// 1. Number of pairs with Given Sum K
function getPairs(arr, k) {
  let obj = {};

  arr.forEach((item, index) => {
    if (obj[item]) {
      console.log(item, k-item);
    } else {
      obj[k-item] = 1;
    }
  });
}
// Output:
// getPairs([1, 4, 2, 2, 3], 5);

//------------------------------------------------------------------------
// 2. Missing Number in the Array
function getMissingNumber(num, arr) {
  const totalSum = (num * (num + 1)) / 2;

  return arr.reduce((accm, item) => accm - item, totalSum);
}
// Output:
// o(getMissingNumber(5, [1, 2, 4, 5]));
// o(getMissingNumber(10, [1, 2, 3, 4, 5, 6, 7, 8, 10]));

//------------------------------------------------------------------------
// 3. Sort an array of 0s, 1s & 2s
function sortArray(arr) {
  let low = 0, mid = 0, high = arr.length - 1;
  const swap = (a, b) => {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  };

  while (mid <= high) {
    if (arr[mid] === 0) {
        swap(mid, low);
        low++;
        mid++;
    } else if (arr[mid] === 1) {
        mid++;
    } else {
        swap(mid, high);
        high--;
    }
  }
  o(arr);
}
// Output:
// sortArray([1,1, 0, 1, 2, 2, 0, 1, 2, 0, 0, 1]);

//------------------------------------------------------------------------
// 4. Equilibrium point in array (https://practice.geeksforgeeks.org/problems/equilibrium-point/0)

function equilibriumPoint(arr) {
  let sum = arr.reduce((prev, cur) => prev + cur, 0);
  let leftSum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum = sum - arr[i]; // sum is now right sum for index i

    if (leftSum == sum)
        return i;

    leftSum = leftSum + arr[i];
  }
}
// Output:
// o(equilibriumPoint([1, 3, 5, 0, 5, 2, 2]));
// o(equilibriumPoint([-7, 1, 5, 2, -4, 3, 0]));

//------------------------------------------------------------------------
// 5. Largest Number formed from an Array ()
// Example:
// Input:
// 2
// 5
// 3 30 34 5 9
// 4
// 54 546 548 60
//
// Output:
// 9534330
// 6054854654
// Hint is sort by comparing number formed by two numbers.
function largestNumFormation(arr) {
  let x = arr.sort(function(a, b) {
    let tmp1 = parseInt(a + '' + b, 10);
    let tmp2 = parseInt(b + '' + a, 10);

    return tmp1 > tmp2 ? -1 : 1;
  });

  return x.join('');
}

//------------------------------------------------------------------------
// 6. Stock buy and sell
function stockBuySell(arr) {

}
// Amazon Coding Interview Question - K Closest Points to the Origin
