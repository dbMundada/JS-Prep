function countSteps(num) {
  if (num <= 1) {
    return 1;
  }

  return countSteps(num -1) + countSteps(num - 2);
}

{1, 3, 5}
function countSteps(num) {
  if (num == 1) {
    return 1;
  }

  return countSteps(num -1)
    + (num >= 3 ? countSteps(num - 3): 0)
    + (num >= 5 ? countSteps(num - 5): 0);
}

console.log(countSteps(1));
console.log(countSteps(2));
console.log(countSteps(3));
console.log(countSteps(4));
console.log(countSteps(5));
