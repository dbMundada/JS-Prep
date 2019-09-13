// // Final & Working Curry
// function add(...arg) {
//
//   function addAgain(...arg2) {
//     return add(...arg, ...arg2);
//   }
//
//   let total = arg.reduce((t, item) => t + item);
//   // addAgain.value = total;
//   addAgain.valueOf = () => total;
//   return addAgain;
// }
//
// console.log(add(2)(3)(5));
// console.log(+add(2, 3, 5));
// console.log(+add(2)(3)(5)(10)(20));
//

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

/*
  Creating Generic Memoization Function
  1. Function sum should not be executed if called with same arguments
  2. If parameters are tweaked still we should not call actual function & use Memoization result
  like sum(1,3) & sum(3,1) are same.
*/
function sum(a, b) {
    console.log('executed');
    return a+b;
}

function memoize(func) {
    var map = {};

    return function () {
        const argm = [...arguments];

        const str = JSON.stringify(argm); // operator

        if (map[str]) {
            return map[str];
        }

        map[str] = func.apply(this, arguments);
        return map[str];
    };
}

const memoSum = memoize(sum);
memoSum(1, 3);
memoSum(5, 1);
memoSum(3, 1);


function add(...arg1) {
  const addAgain = (...arg2) => add.apply(null, [...arg1, ...arg2]);
  addAgain.valueOf = arg1.reduce((total , i) => total + i);

  return addAgain;
}
console.log(add(1)(2)(3).valueOf);
console.log(add(1)(2)(3)().valueOf);
console.log(add(1)(2)(3)(4).valueOf);
console.log(add(1).valueOf);

function add3(...arg1) {
  const addAgain = (...arg2) => {
    const total = arg1.reduce((total , i) => total + i);
    return arg2.length > 0 ? add3.apply(null, [...arg1, ...arg2]) : total;
  };
  const total = arg1.reduce((total , i) => total + i);
  // addAgain.valueOf =

  return arg1.length > 0 ? addAgain : total;
}
console.log(add3(1)(2)(3)());
console.log(add3(1)(2)());
console.log(add3(1)(2)(3)(4)(8)());
console.log(add3(1)());
