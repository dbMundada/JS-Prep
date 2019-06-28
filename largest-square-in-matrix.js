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



/*
 * Complete the 'largestMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

var MaxInt = {
    maxSize: 0,
    setInt: function (i) { this.maxSize = i; },
    getInt: function () { return this.maxSize; },
};

function findLargestSquare(arr, rows, cols, size) {
    if (rows == 0 || cols == 0) {
        return arr[rows][cols];
    }
    var left = findLargestSquare(arr, rows, cols - 1, size);
    var top = findLargestSquare(arr, rows -1, cols, size);
    var diagonal = findLargestSquare(arr, rows - 1, cols - 1, size);

    var tmpsize = 0;
    if (arr[rows][cols] != 0) {
        tmpsize = 1 + Math.min(Math.min(left, top), diagonal);
    }

    size.setInt(Math.max(size.getInt(), tmpsize));
    return tmpsize;
}


function largestMatrix(arr) {
    // Write your code here
    var size = MaxInt;
    findLargestSquare(arr, arr.length - 1, arr[0].length - 1, size);
    console.log(size);
    return size.getInt();
}


var wiejngi = [
  [1,1, 0],
  [1,1, 0],
  [0,1, 0]
];
console.log(largestMatrix(wiejngi));
