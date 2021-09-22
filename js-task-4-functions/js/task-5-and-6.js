//Написать функцию, которая проверяет, является ли переданное ей число совершенным. 
//Совершенное число – это число, равное сумме всех своих собственных делителей.

function perfectNumber(num) {
    let result = 0;

    for (let i = 0; i < num; i++) {
        if (num % i === 0) {
            result += i
        }
    }

    return result === num ? true : false;
}
console.log(perfectNumber(12))

//Написать функцию, которая принимает минимальное и максимальное значения для диапазона, 
//и выводит только те числа из диапазона, которые являются совершенными. 
//Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.


function findPerfectNumber(min, max) {
    for (let i = min; i < max; i++) {
        if (perfectNumber(i)) {
            console.log(i)
        }
    }
}
console.log(findPerfectNumber(2, 500))