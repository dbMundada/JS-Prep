function getPermutations(string) {
  var results = [];

  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (var i = 0; i < string.length; i++) {
    var firstChar = string[i];
    var otherChar = string.substring(0, i) + string.substring(i + 1);
    var otherPermutations = getPermutations(otherChar);

    for (var j = 0; j < otherPermutations.length; j++) {
      results.push(firstChar + otherPermutations[j]);
    }
  }
  return results;
}

var permutation = getPermutations('YES');
console.log("Total permutation: " + permutation.length);
console.log(permutation);


// "ABC" => "ABC", "ACB", "BAC" ,"BCA" ,"CBA" ,"CAB"


function getAllPermutations(str) {
  var res = [];

  if(str.length === 1) {
    res.push(str);
    return res;
  }

  for (let i =0; i< str.length; i++) {
    let firstChar = str[i];
    let otherChar = str.substring(0, i) + str.substring(i + 1);
    let otherPerm = getAllPermutations(otherChar);

    for (let j = 0; j < otherPerm.length; j++) {
      res.push(firstChar + otherPerm[j]);
    }
  }

  return res;
}

var resArr = getAllPermutations('ABC');

console.log(resArr);


// "ABC" => "ABC", "ACB", "BAC" ,"BCA" ,"CBA" ,"CAB"

// O(2^n)
// 0(n^2)
// With Memoization
function getAllPermutationsWithMemoization(str) {
  let res = [];
  let map = {};

  if(str.length === 1) {
    res.push(str);
    return res;
  }
  for (let i =0; i< str.length; i++) {
    let firstChar = str[i];
    let otherChars = str.substring(0, i) + str.substring(i + 1);
    let otherPerm;

    if (map[otherChars]) {
      otherPerm = map[otherChars];
    } else  {
      otherPerm = getAllPermutationsWithMemoization(otherChars);
    }

    for (let j = 0; j < otherPerm.length; j++) {
      res.push(firstChar + otherPerm[j]);
    }
  }
  return res;
}

var resArr = getAllPermutationsWithMemoization('ABC');

console.log(resArr);
