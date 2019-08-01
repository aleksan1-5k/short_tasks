//3. Напишите код функции sum, количество слагаемых не ограничено
function summator(a) {

    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }
    f.toString = function() {
        return currentSum;
    };
    return f;
}
console.log(summator (1)(2)(3)(4)(5)(6));



/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers.
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
Write a method that takes the array as an argument and returns this "outlier" N.

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

function findChetOrNechet(int){
    var chet = int.filter(a=>a%2==0);
    var nechet = int.filter(a=>a%2!==0);
    return chet.length==1? chet[0] : nechet[0];
}
console.log(findChetOrNechet([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findChetOrNechet([160, 3, 1719, 19, 11, 13, -21]));

/*1. Промисифицировать ф-цию из библиотеки FS
fs.readFile(filename, (err, data) => {
    if (err) {
        console.error(err);
    }

    else {
        console.log(data);
    }
});
*/

function promFunc(filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, function (err, data) {
            if (err) {
                console.error(err);
            }

            else {
                console.log(data);
            }
        });
    });
}