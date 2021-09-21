//Запросить у пользователя число и вывести все делители этого числа.
let number = +prompt('Введите число');

let srt = '';
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        srt = srt + ' ' + i;
    }
}

alert(srt);