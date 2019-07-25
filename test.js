console.log('Hi Datta');


let nums = [1,2,2,3];
// 1: Solution
function removeDuplicates(nums) {
  const tmpNums = [];

  for (var i = 0; i < nums.length; i++) {
    if (tmpNums.indexOf(nums[i]) === -1) {
      tmpNums.push(nums[i]);
    }
  }
  return tmpNums;
}
// 2: Solution
[...new Set(nums)]
