const phoneNumber = "rgekjrng kjrgnjke";
const salary ="serger";
const stripeAcct = 12123;
const username = "asfweferg.com";

function sortZeroOneInArray(arr) {
  var i = 0, j = arr.length - 1;
  for (i = 0; i < j;) {
    if (arr[i] === 1) {
        while (arr[j] === 1) {
          j--;
        }
        arr[j] = 1;
        arr[i] = 0;
    }
    i++;
  }

  return arr;
}

const x = [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1];

console.log(sortZeroOneInArray(x));
