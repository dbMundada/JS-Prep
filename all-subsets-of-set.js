function getCombinations(array) {

    function fork(i, t) {
        if (i === array.length) {
            result.push(t);
            return;
        }
        fork(i + 1, t.concat([array[i]]));
        fork(i + 1, t);
    }

    var result = [];
    fork(0, []);
    return result;
}

var data = [1, 2, 3],
    result = getCombinations(data);

console.log(result);
// [ [ 1, 2, 3 ], [ 1, 2 ], [ 1, 3 ], [ 1 ], [ 2, 3 ], [ 2 ], [ 3 ], [] ]


function powerSet(str) {
    var obj = {}
    //This loop is to take out all duplicate number/letter
    for(var i=0;i<str.length; i++){
       obj[str[i]] = true;
    }
    //variable array will have no duplicates
    var array = Object.keys(obj);
    var result = [[]];
    for(var i=0; i<array.length ;i++){
       //this line is crucial! It prevents us from infinite loop
       var len = result.length;
       for(var x=0; x<len ;x++){
         result.push(result[x].concat(array[i]))
       }
    }
    return result;
}
var string = 'phone'
console.log(powerSet(string));  // it will return the following.
