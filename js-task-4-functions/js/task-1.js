//Написать функцию,
//которая принимает 2 числа и
//возвращает -1, если первое меньше, чем второе;
//1 – если первое больше, чем второе; и 0 – если числа равны.

function twoNumbers(firstNum, secondNum) {
    if (firstNum < secondNum) {
        return -1;
    }
    if (firstNum > secondNum) {
        return 1;
    }
    if (firstNum === secondNum) {
        return 0;
    }
}

console.log(twoNumbers(5, 9));
console.log(twoNumbers(4, 9));
console.log(twoNumbers(4, 4));
console.log(twoNumbers(10, 9));