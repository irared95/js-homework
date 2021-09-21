//Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: 
//от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

let sum = prompt('Введите сумму покупки');

let toNumberSum = Number(sum);

if (toNumberSum && typeof(toNumberSum) === 'number' || toNumberSum === 0) {
    if (toNumberSum > 500) {
        alert(toNumberSum * 7 / 100);
    } else if (toNumberSum > 300 && toNumberSum <= 500) {
        alert(toNumberSum * 5 / 100);
    } else if (toNumberSum > 200 && toNumberSum <= 300) {
        alert(toNumberSum * 3 / 100);
    } else {
        alert('Вы не попали под скидочку!!!')
    }
} else {
    alert('Введите коректную сумму')
}