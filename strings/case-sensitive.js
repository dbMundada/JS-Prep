function getCaseSensitive(str, len) {
  let results = new Set();
  let string =  str.toLowerCase();

  // if (str.length)

  for (let i = 0; i <= str.length; i++) {
    for (let j = i; j <= str.length; j++) {
      var firstChar = (string.substring(i, j)).toUpperCase();
      var res = string.substring(0, i) + firstChar + string.substring(j);
      results.add(res);
    }
  }
  return results;
}

console.log(getCaseSensitive('abc', 4));
