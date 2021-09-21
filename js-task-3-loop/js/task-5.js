//Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. 
//При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. 
//Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

let number = 0;
let positiveNumber = 0;
let negativeNumber = 0;
let zero = 0;
let evenNumber = 0;
let oddNumber = 0;
for (let i = 0; i < 10; i++) {
    number = prompt('Введите 10 чисел')
    if (number === 0) {
        zero = zero + 1;
    }
    if (number > 0) {
        positiveNumber = positiveNumber + 1;
    }
    if (number < 0) {
        negativeNumber = negativeNumber + 1;
    }
    if (number % 2 == 0) {
        evenNumber = evenNumber + 1;

    }
    if (number % 2 !== 0) {
        oddNumber = oddNumber + 1;
    }
}

alert('отрицательные:' + negativeNumber + '; положительные:' + positiveNumber + '; нулевые:' + zero + '; четные:' + evenNumber + '; нечетные: ' + oddNumber)