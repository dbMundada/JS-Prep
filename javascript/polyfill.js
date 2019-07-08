// Implementation of bind() function in JS
Function.prototype.bind = function (obj) {
  var func = this;
  var additionalObj = [].slice.call(arguments, 1);
  return function () {
    var paramsToPass = arguments;
    var concatParams = [].concat(additionalObj, paramsToPass);
    return func.apply(obj, concatParams);
  };
};

// var x = fn.bind(context, a, b, c, d);
// x(x, y, z);



// -----------------------------------------------------------------------------
// Debounce Function Implementation
var debounce = function (func, delay) {
  var inexec;
  return function() {
    var context = this;
    var args = arguments;
    clearTimeout(inexec);
     inexec = setTimeout(function() {
      func.apply(context, args);
     }, delay);
  }
};

var add = (a, b) => console.log(a + b);
var debounceAdd = debounce(add, 3000);

debounceAdd(10, 20);
// Print 30 after 3 sec.
// -----------------------------------------------------------------------------
// Write PolyFill for the Filter function
Array.prototype.filter = function (func) {
  var res = [];
  for (let i=0; i<this.length; i++) {
    func(this[i], i) && res.push(this[i]);
  }
  return res;
};
// -----------------------------------------------------------------------------
// Write PolyFill for the map function
Array.prototype.map = function (func) {
  var res = [];
  for (let i =0; i< this.length; i++) {
    res.push(func && func(this[i], i) || this[i]);
  }
  retunr res;
};
// -----------------------------------------------------------------------------
// Write PolyFill for the reduce function
Array.prototype.reduce = function (func, accm) {
  var res = accm;
  for (let i = 0; i < this.length; i++) {
    res = func(this[i], res, i);
  }
  return res;
};
// -----------------------------------------------------------------------------
// Polyfill of Spread Operator
// fn(x, ...y, z, ...a);
// fn.__(x, y, z, a);
Function.prototype.__ = function() {
    var argsin, argsout, i, r;
    argsout = [];
    argsin = [].slice.call(arguments);
    for (i = 0, ii = argsin.length; i < ii; i++) {
      if (Array.isArray(argsin[i])) {
           argsout = argsout.concat(argsin[i]);
      } else {
           argsout.push(argsin[i]);
      }
    }
    return this.apply(this, argsout);
};
// -----------------------------------------------------------------------------
// Base Number conversion
// Number.toString(radix)

// 1. Decimal to base Number conversion
function Dec2Num(Val, baseNum) {
    var cChars = '0123456789ABCDEF';
    var str = '';
    while (Val > 0) {
        str = cChars.charAt(Val % baseNum) + str;
        Val = Math.floor(Val / baseNum);
    }
    return str
}

// 2. Number to Decimal Conversion
function Num2Dec(Val, baseNum) {
    // return parseInt(Val, baseNum);
    var valArray = Val.split('').reverse();
    var res = 0;

    valArray.forEach((val, index) => {
        res += val * Math.pow(baseNum, index + 1);
    });
    return res;
}


function abcd() {
  console.log('Hello');
  setTimeout(() => {
    console.log('Again');
  }, 0);
  while(true) console.log('Baby');
}
