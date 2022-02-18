function CreateUser(name, age = 10, height = 50, weight = 100) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;

    if ((typeof age !== 'number') || (typeof height !== 'number') || (typeof weight !== 'number')) {
        console.log('Неверный тип данных');
        return {}
    }
}

console.log(new CreateUser('John', 39, 178, 67))