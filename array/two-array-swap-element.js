/* Given two arrays(A & B), can you tell if its possible to swap an element
  from A with an element from B and make the sum of both arrays equal ?
*/

function swapAnElementForEqualSum(arr1, arr2) {
  const sumArr1 = arr1.reduce((prev, curr) => prev + curr, 0);
  const sumArr2 = arr2.reduce((prev, curr) => prev + curr, 0);
  const diff = (sumArr1 - sumArr2) / 2;

  // Not possible to do swap operation if total sum is odd
  // sumArr1 - x + y = sumArr2 -y + x;
  // x - y = (sumArr1 - sumArr2) / 2;
  if ((diff * 2) % 2 !== 0) {
    return 0;
  }

  let sortedArr1 = arr1.sort((a, b) => a > b ? 1 : -1);
  let sortedArr2 = arr2.sort((a, b) => a > b ? 1 : -1);

  console.log(sortedArr1, sortedArr2);
  let i, j;
  for (i = 0, j = 0; i <= sortedArr1.length;) {
    if (sortedArr1[i] - sortedArr2[j] > diff) {
      j++;
    } else if (sortedArr1[i] - sortedArr2[j] < diff) {
      i++;
    } else if (sortedArr1[i] - sortedArr2[j] === diff) {
      console.log(sortedArr1[i], '<==>' ,sortedArr2[j]);
      return 1;
    }
  }

}

const A = [1, 5, 3, 2, 6, 8]; // 25
const B = [3, 9, 12, 7]; // 31

console.log('Swap Possible: ', swapAnElementForEqualSum(A, B));
// Output: if yes return 1 else return 0 (10, 12)
