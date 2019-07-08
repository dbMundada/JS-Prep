module.exports = {
    //param A : array of integers
    //param B : integer
    //return a array of array of integers
    fourSum: function (a, b) {
        var hash = {};
        var result = [];

        a.sort(function (a, b) { return a - b;});

        for (var i = 0; i < a.length; i++) {
            for (var j = i + 1; j < a.length; j++) {

                var k = j + 1;
                var l = a.length - 1;

                while (k < l) {
                    var sum = a[i] + a[j] + a[k] + a[l];

                    if (sum > b) {
                        l--;
                    } else if (sum < b) {
                        k++;
                    } else if (sum === b) {
                        var temp = [a[i], a[j], a[k], a[l]];

                        if (hash[temp.toString()] == null) {
                            hash[temp.toString()] = sum;
                            result.push(temp);
                        }

                        k++;
                        l--;
                    }
                }
            }
        }

        return result;
    }
};
