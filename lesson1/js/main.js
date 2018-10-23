"use strict";
/* Задание 1 */

/**
 * Вызов функции заданное количество раз
 * 
 * @param int times 
 * @param function callback 
 */
function loop(times = 0, callback = null) {
    if ((times === 0) || callback == null) { return ''; }
    for (let i = 0; i < times; i++) {
        callback();
    }
}

/* Задание 2 */

var circle = {
    type: 'circle',
    radius: 10
}

var square = {
    type: 'square',
    width: 5
}

/**
 * Вычисление площади фигуры
 * 
 * @param object figure 
 */
function calculateArea(figure) {
    var result = {};
    var area = 0;
    result.input = figure;
    result.figure = figure.type;

    switch (figure.type) {
        case 'circle':
            area = 2 * Math.PI * figure.radius * figure.radius;
            break;
        case 'square':
            area = figure.width * figure.width
            break;
        default:
            area = figure.width * figure.width
            break;
    }
    result.area = area;
    return result;
}


/* Задание 3 */

/**
 * Общий класс - Человек
 */
class Human {
    constructor(name, age, dateOfBirth) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }

    displayInfo() {
        return `Name: ${this.name}, Age: ${this.age}, BDay:${this.dateOfBirth}`;
    }
}

/**
 * Класс - Сотрудник, наследник класса Человек
 */
class Employee extends Human {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth);
        this.salary = salary;
        this.department = department;
    }

    displayInfo() {
        return super.displayInfo() + `,
        Salary: ${this.salary}, Dpt: ${this.department}`;
    }
}

/**
 * Класс - Менджер, наследник класса Сотрудник
 */
class Manager extends Employee {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth, salary, department);
        this.devList = [];
    }

    /**
     * Метод добавления разрабочика менеджеру
     * 
     * @param object developer 
     */
    addDevelop(developer) {
        this.devList.push(developer);
    }

    /**
     * Метод удаления разработчика из списка менеджера
     * 
     * @param object developer 
     */
    removeDeveloper(developer) {
        var idx = -1;

        this.devList.forEach((element, index) => {
            for (const key in element) {
                const prop = element[key];
                if (developer.name == prop) {
                    idx = index;
                }
            }
        });

        if (idx >= 0) {
            this.devList.splice(idx, 1);
        }
    }

    displayInfo() {
        var developers = '';

        this.devList.forEach((element, idx) => {
            if (idx < this.devList.length - 1) {
                developers += element.name + ', ';
            } else {
                developers += element.name;
            }
        });

        return super.displayInfo() + `,
        Developers: ${developers},
        Type: Manager`;
    }
}

/**
 * Класс Разработчик, наследник класса Сотрудник
 */
class Developer extends Employee {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth, salary, department);
        this.manager = 'none';
    }

    /**
     * Метод возвращающий менеджера, относящегося к разработчику
     */
    getManagerName() {
        return this.manager;
    }

    /**
     * Метод устанавливающий менеджера разработчику
     * 
     * @param object manager 
     */
    setManager(manager) {
        this.manager = manager;
    }

    displayInfo() {
        return super.displayInfo() + `,
        Manager: ${this.manager.name},
        Type: Developer`;
    }
}

// var eug = new Developer('Eugen', '38', '15.03.1980', '100000', 'Frontend');
// var kat = new Developer('Kat', '26', '2.06.1992', '100000', 'Backend');
// var dan = new Developer('Dan', '37', '25.09.1981', '90000', 'Testing');
// var bor = new Manager('Bor', '48', '7.01.1970', '200000', 'Training');
// var mar = new Manager('Mar', '35', '11.08.1983', '150000', 'Training');

// bor.addDevelop(eug);
// bor.addDevelop(kat);
// bor.addDevelop(dan);
// bor.removeDeveloper(eug);
// kat.setManager(mar);
// kat.setManager(bor);

/* Задание 4 */

/**
 *  Генератор
 */
function* generatorData() {
    var result = {};

    result.name = yield;
    result.age = yield;
    result.proffession = yield;

    yield console.log(result);
}

let gen = generatorData();

gen.next();
gen.next(prompt('Enter yor name'));
gen.next(prompt('Enter yor age'));
gen.next(prompt('Enter yor proffession'));

/* Задание 5 */

/**
 * Функция, возращающая промис, который должен получить данные сотрудника
 * 
 * @param int id 
 */
function getProimse(id) {
    return new Promise((resolve, reject) => {
        var url = 'https://jsonplaceholder.typicode.com/users/' + id;
        var xhr = new XMLHttpRequest();

        xhr.open('get', url, true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject(xhr.statusText);
                }
            }
        }
    })
}

/**
 * Получение данных из промисов
 */
function getData() {
    var count = 10;
    var arrData = [];
    var arrPromises = [];
    // соберем промисы в массив
    for (let i = 1; i <= count; i++) {
        arrPromises.push(getProimse(i));
    }
    // соберем данные из промисов в другой массив
    Promise.all(arrPromises).then(
        loadData => arrData.push(loadData),
        err => console.log(err)
    );

    return arrData;
}

console.log(getData());