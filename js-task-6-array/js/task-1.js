//Создать массив «Список покупок». Каждый элемент массива является объектом, 
//который содержит название продукта, необходимое количество и куплен или нет. 
//Написать несколько функций для работы с таким массивом.

//1.Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
//2.Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, 
//необходимо увеличивать количество в существующей покупке, а не добавлять новую.
//3.Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

const shoppingList = [{
        name: 'orange',
        amount: 1,
        isBuy: true,
    },
    {
        name: 'cheese',
        amount: 3,
        isBuy: false,
    },
    {
        name: 'milk',
        amount: 2,
        isBuy: false,
    },
    {
        name: 'chocolate',
        amount: 3,
        isBuy: false,
    },
    {
        name: 'cake',
        amount: 1,
        isBuy: true,
    }
];

shoppingList.sort(function(a, b) {
    return (a.isBuy === b.isBuy) ? 0 : a.isBuy ? 1 : -1;
});

shoppingList.push({
    name: 'tomato',
    amount: 10,
    isBuy: true
})

const addNewBuy = function(elementBuy) {
    const item = elementBuy;
    const resultFind = shoppingList.findIndex(function(itemShopping) {
        return itemShopping.name === item.name;
    })
    if (resultFind === -1) {
        shoppingList.push(item);
        return false
    }
    const totalAmount = shoppingList[resultFind].amount + item.amount;
    shoppingList[resultFind].amount = totalAmount;
}


addNewBuy({
    name: 'cake',
    amount: 10,
    isBuy: true
});

addNewBuy({
    name: 'potato',
    amount: 2,
    isBuy: true
});

const purchase = function(name) {
    shoppingList.map(function(product) {
        if (product.name === name) {
            product.isBuy = true;
        }
    })
}

purchase('milk');
purchase('cheese');

console.log('shoppingList', shoppingList)