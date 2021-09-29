// Написать функцию, которая вычисляет факториал переданного ей числа.
function factorial(value) {
    if (value === 0) {
        return 1;
    }
    return value * factorial(value - 1)
}

console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(1));
console.log(factorial(0));