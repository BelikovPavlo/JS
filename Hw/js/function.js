//! 1
// function calculate(income, taxRate) {
//     if (income < 0 || taxRate < 0 || taxRate > 1) {
//         console.error('ERROR!!!')
//     }

//     const tax = income * taxRate

//     return tax
// }

// const income = 10000
// const taxRate = 0.1

// const tax = calculate(income, taxRate)
// console.log(`Податок на прибуток: ${tax}`);


//! 2
// function cheak(number) {
//     if (typeof number !== 'number') {
//         console.error('ERROR!!!')
//         return false
//     }

//     return number % 2 === 0
// }

// console.log(cheak(12));
// console.log(cheak(43));
// console.log(cheak(98));
// console.log(cheak(147));


// function num(num1, num2) {
//     if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//         console.error('ERROR!!!')
//         return
//     }
//     if (num1 > num2) {
//         console.log(`${num1} > ${num2}`);
//     } else if (num1 < num2) {
//         console.log(`${num1} < ${num2}`);
//     } else {
//         console.log(`${num1} = ${num2}`);
//     }
// }

// num(5, 2)
// num(3, 4)
// num(4, 4)
// num(5, 'H')




