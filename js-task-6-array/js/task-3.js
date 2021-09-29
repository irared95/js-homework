//Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). 
//Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. 
//Написать функцию, которая принимает массив стилей и текст, 
//и выводит этот текст с помощью document.write() в тегах <p></p>, 
//добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
const cssStyle = [{
        nameStyle: 'color',
        propertyStyle: 'red'
    },
    {
        nameStyle: 'font-size',
        propertyStyle: '12px'
    },
    {
        nameStyle: 'background-color',
        propertyStyle: 'green'
    },
    {
        nameStyle: 'cursor',
        propertyStyle: 'pointer'
    },
    {
        nameStyle: 'font-family',
        propertyStyle: 'sans-serif'
    }
];
console.log(cssStyle)
const allCssStyle = function() {
    for (let i = 0; i < cssStyle.length; i++) {
        console.log(cssStyle[i])
        const item = cssStyle[i];
        document.write('<p style= ' + item.nameStyle + ':' + item.propertyStyle + ' > text: ' + item.nameStyle + '</p>')
    }
}
allCssStyle()