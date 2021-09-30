//Реализовать класс Employee, описывающий работника, и создать массив работников банка.

//Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. 
//Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().

//Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().

class Employee {
    constructor(firstName, age, lastName) {
        this.firstName = firstName;
        this.age = age;
        this.lastName = lastName;
    }
}

class EmpTable {
    constructor(employees) {
        this.employees = employees;
    }
    getHtml() {
        document.write('<table>')
        this.employees.forEach(function(item) {
            document.write(
                '<tr><td>' + item.firstName + '</td><td>' + item.age + '</td><td>' + item.lastName + '</td></tr>'
            )
        });
        document.write('</table>')
    }
}

const bankEmployees = [{
        firstName: 'Vovan',
        age: 26,
        lastName: 'Dav',
    },
    {
        firstName: 'Iren',
        age: 26,
        lastName: 'Red',
    },
    {
        firstName: 'Gari',
        age: 1,
        lastName: 'Garen',
    }
]

const employee = bankEmployees.map(function(item) {
    const firstName = item.firstName;
    const age = item.age;
    const lastName = item.lastName;
    return new Employee(firstName, age, lastName);
})
console.log('employee', employee)
const empTable = new EmpTable(employee);
empTable.getHtml();