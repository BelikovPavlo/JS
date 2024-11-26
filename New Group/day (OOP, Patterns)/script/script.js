//? OBJECT 

//! Створити об'єкт
// const  obj1 = new Array()
// const obj2 = {}

//! Синтаксис object
//* const objName = {
//*   key: value,
//*   key: value,
//*   key: value,
//*   key: value,
//*   key: value,
//* }

// const car = {
//     name: 'BMW',
//     model: 'm5',
//     age: 2,
//     maxSpeed: 330,
// }

//! Получити данні з об'єкта
// console.log(car);
// console.log(car.name + ' ' + car.model); //1 .
// console.log(car['age']); //2 []

// /////////////////////////////////

// const objKey = 'maxSpeed'
// console.log(car.objKey); //undefined
// console.log(car.maxSpeed); //330
// console.log(car[objKey]); // 330


//! що можна класти в об'єкт

// const obj = {
//     str: 'string', // властивості об'єкта
//     Number: 540, // властивості об'єкта
//     Boolean: true, // властивості об'єкта
//     null: null, // властивості об'єкта
//     und: undefined, // властивості об'єкта
//     arr: [1, 2, 3], // властивості об'єкта
//     obj: {name: 'test'}, // властивості об'єкта
//     fn: function(){console.log('ok');} // метод
// }

// console.log(obj);

// console.log(obj.arr[1]);
// console.log(obj.obj.name);


// obj.fn()



//? Модифікування об'єкта
//! 1. Додавання нових властивостей

// const car = {
//     name: 'BMW',
//     model: 'm5',
//     age: 2,
//     maxSpeed: 330,
// }

// console.log(car);

// // Властивість +++
// car.kg = 2100
// console.log(car);

// // obj +++
// car.engine = {
//     name: 'm57',
//     type: 'disel',
//     power: 350
// }
// console.log(car);



//! 2. Видалення властивостей
// const car = {
//     name: 'BMW',
//     model: 'm5',
//     age: 2,
//     maxSpeed: 330,
// }

// delete car.maxSpeed

// console.log(car);


//! 3. Редагування властивостей
// const car = {
//     name: 'BMW',
//     model: 'm5',
//     age: 2,
//     maxSpeed: 330,
// }
// car.age = 3

// console.log(car);


//? Копіювання об'єктів
// const car = {
//     name: 'BMW',
//     model: 'm5',
//     age: 2,
//     maxSpeed: 330,
// }
// console.log(car);

// const superCar = car
// superCar.age = 5

// console.log(superCar);
// console.log(car);



//! Як правильно копіювати або метод assing()
// const car = {
//     name: 'BMW',
//     model: 'm5',
//     age: 2,
//     maxSpeed: 330,
// }
// console.log(car);

// const superCar = Object.assign({}, car)
// superCar.age = 5
// console.log(superCar);
// console.log(car);

///////////////////////////
//* Може об'єднати багато об'єктів в один
//* Не можна повторювати назви(b, b)
//* Він робить копію об'єкту

// const target = {a: 1, b: 2}
// const source = {b: 4, c: 5}
// const source2 = {d: 4, e: 5}

// const returnedTarget = Object.assign(target, source, source2)
// const returnedTarget1 = Object.assign(target, source, source2, {name1: 'test'})
// console.log(returnedTarget);


//! Перевірка на існування певного ключа(властивості)  in

// const car = {
//     name: 'BMW',
//     model: 'm5',
//     age: 2,
//     maxSpeed: 330,
// }
// console.log(car);

// console.log('age' in car); // true
// console.log('engine' in car); //false

// if('age' in car){
//     console.log(car.age);
// }



//! Перебрати об'єкт 

// const car = {
//     name: 'BMW',
//     model: 'm5',
//     age: 2,
//     maxSpeed: 330,
// }

// for (const key in car) {
//     console.log(`${key}: ${car[key]}`);
// }


//! Методи об'єктів
// const car = {
//     name: 'BMW',
//     model: 'm5',
//     age: 2,
//     maxSpeed: 330,
//     showInfo: function(){
//         console.log(`${this.name} ${this.model} ${this.maxSpeed}`);
//     }
// }


// car.showInfo()


//////////////////////////////////////////////////////////

//! 1
// const users = {
//     name: 'Pavlo',
//     surname: 'Belikov',
//     age: 17
// }

// console.log(users);

//! 2
// const book = {
//     name: 'Sherlock Holms',
//     autor: 'Artur Konan-Doil',
//     age: 1903
// } 

// function lengthValue(obj) {
//     const keys = Object.keys(obj)
//     return keys.length
// }

// const length = lengthValue(book)
// console.log(length);


//! 3
// const users = {
//     name: 'Pavlo',
//     surname: 'Belikov',
//     age: 17
// }
// const medium = {bal: 6}

// const returnedTarget = Object.assign(users, medium)
// console.log(returnedTarget);


//! 4

// const students = [
//     {name: 'Pavlo', age: 17},
//     {name: 'Anastasiya', age: 25},
//     {name: 'Andriy', age: 22},
//     {name: 'Evgenyi', age: 20}
// ]

// const abultStudents = students.filter(student => student.age > 21);

// console.log(students);
// console.log(abultStudents);


//! 5
// const product = [
//     {name: 'car', price: 2500},
//     {name: 'phone', price: 900}
// ]

// const sorted = (a, b) => {
//     return a.price - b.price
// }

// product.sort(sorted)
// console.log(product);



