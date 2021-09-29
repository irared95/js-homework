//Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
function timeToSecond(hours, minutes, seconds) {
    const hoursToSecond = hours * 60;
    const minutesToSecond = minutes * 60;
    const sumSeconds = hoursToSecond + minutesToSecond + seconds;
    console.log(sumSeconds)
    return sumSeconds;
}
timeToSecond(3, 4, 20);