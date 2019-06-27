/*Task 1*/

function sum(a) {
    var currentSum = a;
    function f(b) {
        currentSum += b;
        return f;
    }
    f.toString = function() {
        return currentSum;
    };
    return f;
}
//console.log(sum (2)(10)(1));

/* Task 2*/
var arr = [5,5,4,];
arr.every(function(pred, i, next) {
    if (i) return pred >= next[i-1];
    else return true; });


/*Task 3*/
