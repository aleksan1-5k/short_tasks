/*You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

    For example, if n = 10:

return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]*/

function countMonkeys(n) {
    var monkeys =[];
    for (var i=1; i<= n; i++){
        monkeys.push(i);
    }
    return monkeys;
}

var n = prompt("Сколько обезьян?");
alert("Считаем обезьянок: "+ countMonkeys(n) );


/*
Nathan loves cycling.

    Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

    You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

    For example:

    time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5*/

function countLiters(time) {
  var  liters = time * 0.5;
    liters = Math.floor(liters);
    return liters;
}
var time = prompt("Сколько часов ехал Nathan ?");
alert("Nathan выпил: "+ countLiters(time) +" литров" );

/*You have to write a function that accepts three parameters:

    - cap is the amount of people the bus can hold excluding the driver.
    - on is the number of people on the bus.
    - wait is the number of people waiting to get on to the bus.
    If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.*/

function busCapacity(cap,on,wait) {
    if (wait >0 && wait <= cap){
        var free = cap - on;
        if (free < wait) {
            return wait-free;
        }
        else return 0;
    }
}
console.log(busCapacity(100,65,50));

/* Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses! */

function createPhoneNumber(numbers){
    var number = numbers.join('');
    return '(' + number.slice(0, 3) + ') '
        + number.slice(3, 6)  + '-' + number.slice(6, 10);
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9]));

/*Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor ('cause of superstition).

Write a function that given an American floor (passed as an integer) returns the real floor.
Moreover, your function should work for basement floors too: just return the same value as the passed one.

Usage Examples
getRealFloor(1) == 0
getRealFloor(0) == 0 // Special case to please Europeans
getRealFloor(5) == 4
getRealFloor(15) == 13
getRealFloor(-3) == -3*/
function RealFloor(n) {
    return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}
console.log(RealFloor(11))

/*The function takes in 2 inputs x and y, and should return x to the power of y

Simple, right? But you're NOT allowed to use Math.pow();

Obs: x and y will be naturals, so DON'T take fractions into consideration;

Note : zero to the power of zero equals one in this kata*/

function pow(x, y) {
    if(x <= 0 && y <= 0){ return 1}
    else if (y != 1) { // пока y != 1, сводить вычисление pow(x,n) к pow(x,y-1)
        return x * pow(x, y - 1);
    } else return x;
}
var x = prompt("Введите x");
var y = prompt("Введите y");
alert( pow(x, y) );


