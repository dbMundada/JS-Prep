/*
For Given Number N find if its COLORFUL number or not

Return 0/1

COLORFUL number:
A number can be broken into different contiguous sub-subsequence parts.
Suppose, a number 3245 can be broken into parts like 3 2 4 5 32 24 45 324 245.
And this number is a COLORFUL number, since product of every digit of a contiguous subsequence is different

N = 23
2 3 23
2 -> 2
3 -> 3
23 -> 6
this number is a COLORFUL number since product of every digit of a sub-sequence are different.

Output : 1
*/

module.exports = {
 //param A : integer
 //return an integer
    colorful : function(A){
        var num = String(A),
            hash = {};

        for (var i = 0; i < num.length; i++) {
            var c = 1;
            for (var j = i; j < num.length; j++) {
                c *= Number(num[j])

                if (hash[c]) {
                    return 0;
                }
                hash[c] = 1
            }
        }
        return 1;
    }

    }
};
