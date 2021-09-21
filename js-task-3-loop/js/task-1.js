//Подсчитать сумму всех чисел в заданном пользователем диапазоне.

let from = +prompt('Введите число 1');
let to = +prompt('Введите число 2');
let total = 0;
for (let i = from; i < to; i++) {
    total = total + i;
}