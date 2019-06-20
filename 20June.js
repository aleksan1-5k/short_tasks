/*The first century spans from the year 1 up to and including the year 100,
 The second - from the year 101 up to and including the year 200, etc.
Task :
Given a year, return the century it is in.*/
function getCentury(year) {
    return Math.ceil(year/100);
}
console.log(getCentury(1895));

/*
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
[68, -1, 1, -7, 10, 10] => [-1, 10]
[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
*/

function multipleOfIndex(array) {
    return array.filter((num, i) => num % i === 0);
}
console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));

/*Simple, remove the spaces from the string, then return the resultant string.*/

var str ="Hello gays, what's up";
function dellSpaces(str) {
    return str.replace(/\s/g, "");
}
console.log(dellSpaces(str));

/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

function removeChars(str) {
    return str.slice(1, -1);
}
console.log(removeChars(str))