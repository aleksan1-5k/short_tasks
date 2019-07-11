
/* Реализуйте функцию removeProperty, которая принимает объек и имя свойства и выполняет следующие действия:
Если объект obj имеет свойство prop, функция удаляет свойство из объекта и возвращает true; во всех остальных случаях возвращается false. */

function removeProperty(obj, prop) {
    for( prop in obj){
        delete obj.prop;
        return true;
    }
    return false;
}

a = new Object();
a.prop = 'qwerty';
console.log(removeProperty(a,a.prop));
//console.log(a);


/*Напишите функцию, которая преобразует введенную пользователем дату в формате MM/DD/YYYY в формат, необходимый для API (YYYYMMDD).
Параметр «userDate» и возвращаемое значение являются строками.
Например, следует преобразовать введенную пользователем дату «31.12.2014» в «20141231», подходящую для API.

console.log(formatDate("12/31/2014"));*/

var myDate = "31.12.2014";
var formatDate = function(badDate) {
    var partsOfDate = badDate.split(/(\d{1,2})\.(\d{1,2})\.(\d{4})/);
    return partsOfDate[3] + partsOfDate[2] +  partsOfDate[1];
};
console.log(formatDate(myDate));

/* класс Worker будет работать так:
let worker = new Worker('Имя', 'Фамилия', 10, 31);
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10
класс PreciousWorker наследует у Worker будет работать так:
let preciousWorker = new PreciousWorker('Имя', 'Фамилия', 10, 31, 5);
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 1550 - то есть 10*31*5
worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 1000 - то есть 20*10*5 */

