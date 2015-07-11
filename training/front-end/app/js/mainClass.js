/**
 * Created by Santa Cruz on 17/06/2015.
 */
var Calculator = function(){

    var memory = 0;

    this.calculateAll = function(){
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

    this.add = function(ope1, ope2){

        if (!ope2)
            return memory = memory + ope1;

        memory = ope1 + ope2;
        return memory;
    };

    this.subtract = function(ope1, ope2){

        if (!ope2)
            return memory = memory - ope1;

        memory = ope1 - ope2;
        return memory;
    };

    this.multiply = function(ope1, ope2){

        if (!ope2)
            return memory = memory * ope1;

        memory = ope1 * ope2;
        return memory;
    };

    this.divide = function(ope1, ope2){

        if (!ope2)
            if (ope1 == 0)
                return 'Zero division is not allowed'
            return memory = memory / ope1;
        if (ope2 == 0)
            return 'Zero division is not allowed'
        memory = ope1 / ope2;
        return memory;
    };

    this.reset = function(){
        memory = 0;
        return memory;
    };
};

var calculator = new Calculator();
calculator.calculateAll(1, 2, 3, 4);
calculator.calculateAll(1, 2);
calculator.calculateAll();

console.log('1 + 2 =', calculator.add(2, 1)); // ==> 3 AND MEMORY = 3
console.log('+ 2 =', calculator.add(2)); // ==> 5 AND MEMORY = 5
console.log('4 + 2 =', calculator.add(4, 2)); // ==> 6 AND MEMORY = 6
console.log('- 2 =', calculator.subtract(2)); // ==> 4 AND MEMORY = 4
console.log('- 1 =', calculator.subtract(1)); // ==> 3 AND MEMORY = 3
console.log('1 - 4 =', calculator.subtract(1,4)); // ==> -3 AND MEMORY = -3
console.log('x 2 =', calculator.multiply(2)); // ==> -6 AND MEMORY = -6
console.log('5 x 2 =', calculator.multiply(5,2)); // ==> 10 AND MEMORY = 10
console.log('/5 =', calculator.divide(5)); // ==> 2 AND MEMORY = 2
console.log('Reset', calculator.reset()); // ==> 0 AND MEMORY = 0
