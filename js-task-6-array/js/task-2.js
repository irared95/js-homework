//Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, 
//количества и цены за единицу товара. Написать следующие функции:

//Распечатка чека на экран;
//Подсчет общей суммы покупки; нужно чтобы все значения unitprice плюсовались
//Получение самой дорогой покупки в чеке; пройтись по каждому unitprice и найти самое большое число Среди всех остальных.
//Подсчет средней стоимости одного товара в чеке.


const checkList = [{
        name: 'orange',
        amount: 1,
        unitPrice: 5,
    },
    {
        name: 'cheese',
        amount: 3,
        unitPrice: 10,
    },
    {
        name: 'milk',
        amount: 2,
        unitPrice: 4,
    },
    {
        name: 'chocolate',
        amount: 3,
        unitPrice: 5,
    },
    {
        name: 'cake',
        amount: 1,
        unitPrice: 3,
    }
];

checkList.forEach(function(item) {
    document.write('<div> name: ' + item.name + '; amount: ' + item.amount + '</div>')
})

const countCheckList = function() {
    let sum = 0;
    for (let i = 0; i < checkList.length; i++) {
        sum += checkList[i].unitPrice;
    }
    console.log(sum)
}
countCheckList();

let greatestSum = 0;
checkList.forEach(function(item) {
    if (item.unitPrice > greatestSum) {
        greatestSum = item.unitPrice
    }

})
console.log(greatestSum)

const calcAvaregeSum = function() {
    let sum = checkList.reduce(function(previousValue, item) {
        return previousValue + item.unitPrice;
    }, 0);

    let averagePrice = sum / checkList.length;
    return averagePrice;
}
console.log('calcAvaregeSum', calcAvaregeSum())