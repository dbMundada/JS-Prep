'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


// Complete the hasVowels function below.
function hasVowels(strArr, query) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let arrVowels = strArr.map(str => {
        if (str.length === 1) {
            return (vowels.indexOf(str[0]) !== -1) ? 1 : 0;
        }
        let first = str[0];
        let last = str[str.length -1];
        return (vowels.indexOf(first) !== -1) && (vowels.indexOf(last) !== -1) ? 1 : 0;
    });

    // let vowelsCountArr = [arrVowels[0]];
    // for (let i = 1; i< strArr.length; i++) {
    //     vowelsCountArr[i] = vowelsCountArr[i-1] + arrVowels[i];
    // }
    // console.log(vowelsCountArr);


    let resOut = query.map(q => {
      let tmp = q.split('-');
      const first = parseInt(tmp[0], 10) - 1;
      const last = parseInt(tmp[1], 10) - 1;
      let res = 0;

      for (let i = first; i <= last; i++) {
        res += arrVowels[i];
      }
      return res;
    });

    return resOut;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const strArrCount = parseInt(readLine().trim(), 10);

    let strArr = [];

    for (let i = 0; i < strArrCount; i++) {
        const strArrItem = readLine();
        strArr.push(strArrItem);
    }

    const queryCount = parseInt(readLine().trim(), 10);

    let query = [];

    for (let i = 0; i < queryCount; i++) {
        const queryItem = readLine();
        query.push(queryItem);
    }

    const res = hasVowels(strArr, query);

    ws.write(res.join('\n') + '\n');

    ws.end();
}
