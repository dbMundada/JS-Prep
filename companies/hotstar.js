// Interview
//
// There are 4 rounds in the entire process. the process is very structured and it finishes off in half a day. I had one video call and then they asked me to come onsite for the rest of the rounds. The system deign round was a bit weird and the questions asked in that round were out of the world. I did not have any framework knowledge even then i was asked about Angular and react in it. Have not faced such questions in any other interview.
// 1. Video call(screening round)
// 2. DS and algo round.
// 3. UI techh round
// 4. System design round
// Show Less
//
// Interview Questions
//
// 1. video call
// - implement sum(2)(3)(4) , sum(2,3,4)
// ------------------------------------------------
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func: this.foo = " + this.foo);
        console.log("outer func: self.foo = " + self.foo);
        (function() {
            console.log("inner func: this.foo = " + this.foo);
            console.log("inner func: self.foo = " + self.foo);
        }());
    }
};
myObject.func();
// -----------------------------------------------------
// -What will the code below output? Explain your answer.

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);

// 2. DS Algo round:
// - given a dictonary of words, we need to write a function that performs search on it.
// - Implment binary search in sorted array. follow up if the array is rotated
// - Distribute candies problem from leetcode.
// - Question on 2D Array
//
// 3. UI techh round:
// Outputs of the following questions:
var arr=[1,2,3,4,5]
console.log(i);
for(var i=0; I<arr.length; I++){
    setTimeout[()=>{
        console.log(i);
    }, 100-20*I);
}
console.log(I—);
setTimeout[()=>{
    console.log(—i);
});
// -------------------------------------------------
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
// ------------------------------------------------------------------
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();
// --------------------------------------------
// - difference between var and let.
// - event loop
//
// 4.System Design:
// -implement Pipeline chaining
// -Implement subscription on DOM
// -Implement two way data Binding.
// -Angular concepts.
