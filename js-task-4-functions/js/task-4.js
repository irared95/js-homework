//Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
//Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

function square(width, height) {
    if (!height) {
        return width * width
    }
    return width * height
}

console.log(square(2, 4))
console.log(square(10))
console.log(square(5, 4))