//! Function - це блоки коду які ми можемо викликати коли нам потрібно

//? Схема
// function nameF(params){
//     body function 
// }

//? Як викликати функцію
// function showMyName(){
//     console.log(' my name is Pavlo');
// }

// showMyName()


//! Параметри функції(params)

// function plus(a, b){
//     let result = a + b
//     console.log(result);
// }
// //? Сюди задаються значення (a, b)
// plus(1, 2)
// plus(5, 5)
// plus(22, 28)



// function plus(a, b){
//     if (a === undefined || b === undefined){
//         console.log('Передайте число в функцію')
//     } else {
//         let result = a + b
//         console.log(result);
//     }
// }

// plus(1, 2)
// plus()



// function plus(a = 0, b = 0){
//     let result = a + b;
//     console.log(result);
// }

// plus(1, 2)
// plus(111)
// plus()

//? Можна вказувати різні значення
// function test(a = 0, b = undefined, c = true, d = null, r, t, y){

// }
// test()


//! Функції вміють вертати свої роботи return

//? void
// function plus(a = 0, b = 0){
//     let result = a + b;
//     console.log(result);
// }


//! Вертає
// function plus(a, b){
//     let result = a + b;
//     console.log(result);




//     return result // END



//     if(a === undefined){
//         return 0
//     } else if (b === undefined){
//         return 0
//     } else {
//         return a + b
//     }
// }

// const sum = plus()


//! Зона видимості змінних

// const test1 = 'IT'
// let test2 = 'step' // true

// function scope(params){
//     console.log(test1 + test2);

//     const test111 = 'bmw '
//     let test222 = 'm5'
//     console.log(test111 + test222); // true
// }

// console.log(test111 + test222); // false

// scope()


//! Example (calc)

// const $equal = document.querySelector('.equal')
 
// const $plus = document.querySelector('.plus')
// const $minus = document.querySelector('.minus')
// const $multiplication = document.querySelector('.multiplication')
// const $division = document.querySelector('.division')
 
// $plus.addEventListener('click', plus)
// $minus.addEventListener('click', minus)
// $multiplication.addEventListener('click', multiplication)
// $division.addEventListener('click', division)
 
 
// function plus(){
//   const a = +document.querySelector('.a').value
//   const b = +document.querySelector('.b').value
 
//   let rus = a + b
//   $equal.textContent = rus
// }
// function minus(){
//   const a = +document.querySelector('.a').value
//   const b = +document.querySelector('.b').value
 
//   let rus = a - b
//   $equal.textContent = rus
// }
// function multiplication(){
//   const a = +document.querySelector('.a').value
//   const b = +document.querySelector('.b').value
 
//   let rus = a * b
//   $equal.textContent = rus
// }
// function division(){
//   const a = +document.querySelector('.a').value
//   const b = +document.querySelector('.b').value
 
//   let rus = a / b
//   $equal.textContent = rus
// }
