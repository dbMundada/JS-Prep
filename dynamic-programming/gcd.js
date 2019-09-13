// Eucledian Algorithm: 0(log(Min(a, b)))
function gcd(a, b) {
  if (a === 0 || b === 0) {
    return 1;
  }

  if (a % b === 0) {
    return b;
  }
  console.log(b, a%b);
  return gcd(b, a % b);
}

// console.log(gcd(3,2));
console.log(gcd(35,10));
// console.log(gcd(30,12));
// console.log(gcd(100, 60));
