function climbingLeaderboard(scores, alice) {
    let res = [];
    let result = [];

    scores.forEach(i => {
        if (res.indexOf(i) === -1) {
            res.push(i);
        }
    });

    let len = res.length;

    alice.forEach(score => {

        for (let i = 0;i <= len; i++) {
            if (score >= res[i]) {
                result.push(i+1);
                return;
            }
        }
        result.push(res.length + 1);
    });
    return result;
}

const scores = [100, 100, 50, 40, 40, 20, 10];
const alice = [5, 25, 50, 120];

console.log(climbingLeaderboard(scores, alice));


console.log([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5].length);
