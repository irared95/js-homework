//Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), 
//подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
let age = prompt('Введите Ваше возраст!');

let toNumberAge = Number(age);

if (toNumberAge && typeof(toNumberAge) === 'number' || toNumberAge === 0) {
    if (toNumberAge > 60) {
        alert('Вы бабка или дед!');
    }
    if (toNumberAge > 18 && toNumberAge <= 60) {
        alert('У вас есть ребенок!');
    }
    if (toNumberAge > 12 && toNumberAge <= 18) {
        alert('Иди учись!');
    }
    if (toNumberAge >= 0 && toNumberAge <= 12) {
        alert('Бегом в дет сад!');
    }
} else {
    alert('Возраст введен не корректно!')
}