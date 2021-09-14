//Написать конвертор валют. 
//Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

let amount = +prompt('Введите сумму');
let currency = prompt('Выберете валюту: EUR, UAH, AZN');

let valueEUR = 30.58;
let valueUAH = 25.68;
let valueAZN = 15.40;

if (!amount || typeof(amount) !== 'number') {
    alert('Введите коректную сумму')
} else {
    if (currency === 'EUR') {
        alert(valueEUR * amount)
    } else if (currency === 'UAH') {
        alert(valueUAH * amount)
    } else if (currency === 'AZN') {
        alert(valueAZN * amount)
    } else {
        alert('Введена не верна валюта')
    }
}