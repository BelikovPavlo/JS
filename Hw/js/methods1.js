//! 1
// const num = [2,-5,-9,2,-4,5,34,-11,2,-3,4,5,-6,9]

// let sumNegativeNum = 0
// for (let number of num) {
//     if (number < 0) {
//         sumNegativeNum += number
//     }
// }

// console.log("Сума від’ємних чисел: ", sumNegativeNum);

//! 2
// const num = [45,-65,48,52,-45,-78,-96,25,14,25,45]

// let index = 1
// for (let i = 0; i < num.length; i += 2) {
//     index += num[i]
// }

// console.log("Добуток елементів з парними номерами: ", index);

//! 3
// const num = [45,65,48,52,45,-78,-96,25,14,25,45]
// let maxNum = num[0]
// let maxIndex = 0

// for (let i = 1; i < num.length; i++) {
//     if (num[i] > maxNum) {
//         maxNum = num[i]
//         maxIndex = i
//     }
// }

// console.log("Максимальне число:", maxNum);
// console.log("Індекс максимального числа:", maxIndex);


//! 4

// const A = []
// for (let i = 0; i < 100; i++) {
//     A.push(i + 1)
// }

// let sum = 0
// for (let i = 0; i < A.length; i++) {
//     sum += A[i]
// }

// console.log("Сума елементів масиву: ", sum);

//! 5
// const B = []
// for (let i = 0; i < 50; i++) {
//     B.push(i + 1)
// }

// let num = 1
// for (let i = 0; i < B.length; i++) {
//     if (B[i] % 2 !== 0) {
//         num += B[i]
//     }
// }

// console.log("Добуток непарних чисел: ", num);



//! 6
// const arrayNumbers = []

// for (let i = 0; i < 50; i++) {
//   arrayNumbers.push(Math.floor(Math.random() * 1000))
// }
// console.log('✌️arrayNumbers --->', arrayNumbers);

// let minNum = arrayNumbers[0]

// for (let i = 1; i < arrayNumbers.length; i++) {
//   if(arrayNumbers[i] < minNum) {
//     minNum = arrayNumbers[i]
//     console.log(minNum);
//   }
// }

// console.log('Мін число масива: ' + minNum);
