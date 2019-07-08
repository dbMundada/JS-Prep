// Final & Working Curry
function add(...arg) {

  function addAgain(...arg2) {
    return add(...arg, ...arg2);
  }

  let total = arg.reduce((t, item) => t + item);
  // addAgain.value = total;
  addAgain.valueOf = () => total;
  return addAgain;
}

console.log(add(2)(3)(5));
console.log(+add(2, 3, 5));
console.log(+add(2)(3)(5)(10)(20));


// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
function curry (f) {
  var nargs = f.length;
  var vargs = [];

  return function curried () {
    return vargs.push.apply(vargs, arguments) >= nargs
      ? f.apply(undefined, vargs.slice(0, nargs))
      : curried;
  };
}

var fn2 = curry(function (a, b) {
  return a + b;
});
var fn3 = curry(function (a, b, c) {
  return a * (b + c);
});
var fn4 = curry(function (a, b, c, d) {
  return Math.pow(a, b * (c + d));
});

console.log(fn2(1)(2)); // 1 + 2
console.log(fn3(2)(3)(4)); // 2 * (3 + 4)
console.log(fn4(2)(1, 3)(4)); // 2 ^ (1 * (3 + 4))
