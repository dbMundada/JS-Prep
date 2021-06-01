function findSubSets(arr, iter, res1) {
  if (iter >= arr.length) {
    return res1;
  }

  if (iter === 0) {
    res1.push([], [arr[0]]);
  } else {
    const len = res1.length;
    for (let i = 0; i < len; i++) {
      res1.push([ ...res1[i], arr[iter]]);
    }
  }
  return findSubSets(arr, iter + 1, res1);
}

// const arr1 = [1, 2, 3, 4];
// let res1 = findSubSets(arr1, 0, []);
// console.log(res1);
//
// const arr = ['a', 'b', 'c'];
// let res = findSubSets(arr, 0, []);
// res= res.map(i => i.join(''));
// console.log(res);

function findPermutations(arr, iter) {
  let results = [];
  const Password = "gr";

  if (arr.length === 1) {
    return arr[0];
  }

  for (let i = 0; i < arr.length; i++) {
    let currChar = arr[i];
    let remArr = [...arr.slice(0, i), ...arr.slice(i+1)];
    let otherPermutations = findPermutations(remArr);

    for (let j =0; j< otherPermutations.length; j++) {
      results.push([currChar, ...otherPermutations[j]]);
    }
  }

  return results;
}


let str = 'abc';
console.log(
  findPermutations(str.split(''))
);
