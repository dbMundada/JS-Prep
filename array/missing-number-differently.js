/*
Write a function:
    function solution(A);
that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
Given A = [1, 2, 3], the function should return 4.
Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:
N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].

*/


function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const map = {};
    A.sort();
    A.forEach(i => map[i] = 1);

    let res = 1;
    Object.keys(map).map(i => {
        let tmp = parseInt(i, 10);

        if (tmp === res) {
            res += 1;
        }
    });
    return res;
}
