/**
 * Created by jalatraining on 5/30/2015.
 */
console.log('This is a code from MAIN.JS');

var name = "leo";
var sayHello = function(name) {
    console.log('Hello ' + name);
};

var age = '';

var calculateAge =  function(bornYear) {
    age = 2015 - bornYear;

    return age;
};

var calculateAll = function(){
    if (arguments.length > 0) {
        console.log(arguments);
        console.log('COUNT: ', arguments.length);    
        console.log('SUM: ', sum(arguments));
        console.log('AVG: ', sum(arguments)/arguments.length);
        console.log('MAX: ', max(arguments));
        console.log('MIN: ', min(arguments));
    } else {
        console.log('You need at least 1 argument to calculate indicadors');
    } 
}

var sum = function(numbers, pos){

    if (!pos)
        pos = 0;

    if (pos == numbers.length - 1)
        return numbers[pos];

    return numbers[pos] + sum(numbers, pos + 1)
}

var max = function(numbers, pos, maximum){

    if (!pos)
        pos = 0;

    if (pos == numbers.length)
        return maximum;

    if (!maximum)
        maximum = numbers[pos];

    if (maximum < numbers[pos])
        maximum = numbers[pos];           

    return max(numbers, pos + 1, maximum)
}

var min = function(numbers, pos, minimum){

    if (!pos)
        pos = 0;

    if (pos == numbers.length)
        return minimum;

    if (!minimum)
        minimum = numbers[pos];

    if (minimum > numbers[pos])
        minimum = numbers[pos];           

    return min(numbers, pos + 1, minimum)
}

calculateAll(1, 2, 3);
calculateAll(1, 2, 3, 4.5, 4.55, 4.6, 0);
calculateAll(10, 2, 3, 14, -5, 6);
calculateAll();
calculateAll(-1, 0, -2, -3);

var pepe = {
    name: 'pepe',
    age: 20,
    sayHello: function () {
        console.log('hello')
    }
};

var countWords = function(){

    var paragraph = window.prompt('Introduece the pragraph')

    return paragraph.split(' ').length;
};