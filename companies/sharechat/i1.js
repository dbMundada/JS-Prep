Q1 :

    [{ a[x+1], a[x+2]... a[n] },  { a1 , a2 , a3 , a4 , a5 ... a[x] }]


    [ { 60 , 71 , 78 , 88 , 100 } , { 1 , 10 , 15 , 18 , 29 , 30 , 38 , 48 , 50 , 51 , 55 , 59 } ]



    [ { 60 , 71 , 78 , 88 , 100 } , { 1 , 10 , 15 , 18} ]


Q2 :

let arr1 = [ 'a' , 'b' , 'c' ];
let arr2 = [ 'd' , 'e' , 'f' ];

k = 5
adbecf
a
adad
ada
adb


// befc - not valid string...
// adbecf -
//    "a" , "afa" , "ae" , "adcf".

function getAllStrings(arr1, arr2, currStr, resArr, k) {

    resArr = [...resArr, ...[currStr] ];
    if (currStr.length === k) {
        return [currStr];
    }


    let isEvenLen = (currStr.length % 2) === 0;

    if (isEvenLen) {
        for (let i = 0; i < arr1.length; i++) {
            resArr = [...resArr, ...getAllStrings(arr1, arr2, currStr + arr1[i], [], k)];
        }
    } else {
        for (let i = 0; i < arr2.length; i++) {
            resArr = [...resArr, ...getAllStrings(arr1, arr2, currStr + arr2[i], [], k)];
        }
    }

    return resArr;
}


let res = getAllStrings(arr1, arr2, '', [], 3);
console.log(res);
