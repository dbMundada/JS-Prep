// Given an array of integers, return the highest product possible by multiplying 3 numbers from the array

function greatProductOfMax3(arr) {
  const sortedArray = arr.sort(function (a, b) {
    let aa = parseInt(a, 10), bb = parseInt(b, 10);
    return aa > bb ? -1 : 1;
  });

  return sortedArray[0] * sortedArray[1] * sortedArray[2];
}

console.log(greatProductOfMax3([1,2,6,8,3,10]));
