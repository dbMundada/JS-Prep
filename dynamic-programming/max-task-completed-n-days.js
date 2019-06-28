/*
No. of days (n) = 5
Day      L.E.   H.E
1        1       3
2        5       6
3        4       8
4        5       7
5        3       6
Maximum amount of tasks
        = 3 + 5 + 4 + 5 + 3
        = 20
*/

const n = 5;
const obj = [
  { l: 1, h: 3 },
  { l: 5, h: 6 },
  { l: 4, h: 8 },
  { l: 5, h: 7 },
  { l: 3, h: 6 },
];

/* Overlapping Subproblems Property Solution */
function max_tasks(n, obj) {
  if (n < 0) {
    return 0;
  }

  return Math.max(
    max_tasks(n-2, obj) + obj[n].h,
    max_tasks(n-1, obj) + obj[n].l
  );
}

const maxTask = max_tasks(n-1, obj);
console.log('First Approach: ', maxTask);

/* DP with Memoizaion Solution */
function max_tasks_dp(n, obj) {
  let res = 0;
  let memObj = {};

  memObj[0] = 0;
  memObj[1] = obj[1].h;

  // Fill the entire array determining which
  // task to choose on day i
  for (var i = 2; i <= n; i++) {
    memObj[i] = Math.max(
      memObj[i-2] + obj[i-1].h,
      memObj[i-1] + obj[i-1].l
    );
  }
  return memObj[n-1];
}

const maxTaskDP = max_tasks_dp(n, obj);
console.log('Second Approach: ', maxTaskDP);
