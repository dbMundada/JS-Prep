function findSubString(master, subStr) {
    var m = master.length;
    var n =  subStr.length;

    for (var i = 0; i <= m-n; i++) {
        var j;

        for (j = 0;j < n; j++) {
            if (master[i+j] !== subStr[j]) {
                break;
            }
        }

        if (j === n) {
          return true;
        }
    }
    return false;
}

console.log(findSubString('abcd', 'cd'));
console.log(findSubString('abbcd', 'bc'));
console.log(findSubString('bbbbbbcbcb', 'bcb'));
console.log(findSubString('bbbbbbcbcb', 'bcbcbc'));
