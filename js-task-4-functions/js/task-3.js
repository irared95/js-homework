//Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.
//Например: цифры 1, 4, 9 превратятся в число 149.

function convertToNumber(a, b, c) {
    const aStr = String(a);
    const bStr = String(b);
    const cStr = String(c);
    return Number(aStr + bStr + cStr)
}

console.log(convertToNumber(2, 3, 4))
console.log(convertToNumber(0, 1, 5))
console.log(convertToNumber(1, 55, 100))