//Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
//Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
function time(hours, minutes, seconds) {
    const hoursAddedZero = addZero(hours);
    const minutesAddedZero = addZero(minutes);
    const secondsAddedZero = addZero(seconds);

    const hoursStr = hoursAddedZero ? String(hoursAddedZero) : '00';
    const minutesStr = minutesAddedZero ? String(minutesAddedZero) : '00';
    const secondsStr = secondsAddedZero ? String(secondsAddedZero) : '00';

    return hoursStr + ':' + minutesStr + ':' + secondsStr;
}

function addZero(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}

console.log(time());
console.log(time(15, 2));
console.log(time(15, 2, 3));