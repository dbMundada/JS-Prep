// Input: [7, 1, 5, 3, 6, 4]
// Output: 5

var arr = [7, 1, 5, 3, 6, 4];


function Stock(obj) {
  this.name = obj.name;
  this.val = obj.val;

  this.getVal = () => this.val;
  this.getName = () => this.name;
}

var stock1 = new Stock({ val: 7, name: 'Qubole' });
var stock2 = new Stock({ val: 1, name: 'Pubmatic' });
var stock3 = new Stock({ val: 5, name: 'A9' });
var stock4 = new Stock({ val: 3, name: 'Rubicon' });
var stock5 = new Stock({ val: 6, name: 'Appnexus' });
var stock6 = new Stock({ val: 4, name: 'Flipkart' });


function StockList() {
  this.arr = [];

  this.addStock = (stock) => this.arr.push(stock);
  this.getStock = (name) => {
    let res = this.arr.filter((item) => item.name ===  name);
    return res[0];
  };
}

var list =


function getProfitFromStocks(arr) {
  let maxsum = 0;

  for (let i = 1; i < arr.length; i++) {
    let tmpProfit = (arr[i] - arr[i - 1]);

    if (tmpProfit > 0) {
      console.log('Intervals: (', i-1, ',', i, ')');
      maxsum += tmpProfit;
    }
  }

  return maxsum;
}

console.log(getProfitFromStocks(arr));


function sum(a, b) {
  console.log(a, b);
  return a + b;
}

function cacheFn(fn) {
  var map = {};

  return function () {
    let arg = [...arguments];
    const argKey = JSON.stringify(arg);

    if (!map[argKey]) {
      map[argKey]= fn.apply(null, arg);
    }
    return map[argKey];
  };
}

const newSum = cacheFn(sum);
newSum(10, 20);

const newDiff = cacheFn(diff);
newDiff(10, 20);


fn.apply(context, [arr])
fn = fn.bind(context)


classA

childclass1 -> blue

.childclass1.childclass2 {
  background: red;
}

<div class="parentclass">
</div>


parentclass::before,
parentclass::after {

}
