//Запросить 2 числа и найти только наибольший общий делитель.
let numOne = +prompt('Введите число 1', 30);
let numTwo = +prompt('Введите число 2', 18);

while (numOne !== 0 && numTwo !== 0) {

    if (numOne > numTwo) {
        numOne = numOne % numTwo
    } else {
        numTwo = numTwo % numOne
    }
}

if (numOne) {
    alert(numOne)
} else {
    alert(numTwo)
}