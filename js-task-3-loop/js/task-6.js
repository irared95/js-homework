//Зациклить калькулятор. 
//Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример.
// И так до тех пор, пока пользователь не откажется.

let switchLoop = true;

while (switchLoop) {
    let numberOne = +prompt('Введите первое число');
    let operator = prompt('Введите +,-,/,*');
    let numberTwo = +prompt('Введите второе число');

    if (operator === '+') {
        alert(numberOne + numberTwo);
    }
    if (operator === '-') {
        alert(numberOne - numberTwo);
    }
    if (operator === '*') {
        alert(numberOne * numberTwo);
    }
    if (operator === '/') {
        alert(numberOne / numberTwo);
    }
    let question = confirm('Хотите решить еще один пример?');
    switchLoop = question
}