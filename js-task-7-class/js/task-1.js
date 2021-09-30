// Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов. 

class Circle {
    constructor(radius) {
        this.radius = radius;
        this.P = 3.14;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getDiameter() {
        return this.radius * 2;
    }
    getSquare() {
        return this.P * Math.pow(this.radius, 2);
    }
    getLength() {
        return this.P * 2 * this.radius;
    }
}

const round = new Circle(10);

console.log('radius', round.getRadius())
round.setRadius(30)
console.log('radius', round.getRadius())
console.log('diameter', round.getDiameter())
console.log('square', round.getSquare())
console.log('length', round.getLength())