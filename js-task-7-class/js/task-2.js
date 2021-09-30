// Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах); 
// метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, 
//пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере). 
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и 
//добавив метод для заправки маркера.

// Продемонстрировать работу написанных методов.

class Marker {
    constructor(color, ink) {
        this.color = color || 'red';
        this.ink = ink;
    }
    print(string) {
        const percentStringInk = string.length / 2;
        if (this.ink < percentStringInk) {
            document.write('<div">недостаточно чернил</div>')
            return false
        }
        this.ink = this.ink - percentStringInk;
        document.write('<div style="color: ' + this.color + '">' + string + '</div>')

    }
    getInk() {
        return this.ink
    }
}

class FillingMarker extends Marker {
    constructor(color, ink) {
        super(color, ink);
    }
    setInk(countInk) {
        this.ink = countInk;
    }
}

const fillingPen = new FillingMarker('blue', 10);
console.log(fillingPen.getInk())
fillingPen.print('привет')
console.log(fillingPen.getInk())
fillingPen.setInk(100)
console.log(fillingPen.getInk())
fillingPen.print('привет')
console.log(fillingPen.getInk())