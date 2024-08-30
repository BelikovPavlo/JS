//! 1 

// const arr = [1, 3, 8, -2, -1]
// function filter(num) {
//     const positive = []
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] > 0) {
//             positive.push(num[i])
//         }
//     }
//     return positive
// }

// const positive = filter(arr)
// console.log(positive);


//! 2

// const arr = [5, 6, 42, 90, 102]

// function minMax(arr) {
//     let min = arr[0]
//     let max = 0

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i]
//         } else {
//             max = arr[i]
//         }
//     }
//     return {min, max}
// }

// const result = minMax(arr)
// console.log(`Мінімальне: ${result.min}`);
// console.log(`Максимальне: ${result.max}`);



//! 3 

// const arr = [5, 1, 3, 5, 4, 6, 7, 5, 5, 5, 4]
// function duplicate(arr) {
//     const number = []
    
//     for (let i = 0; i < arr.length; i++) {
//         let isNot = true
//         for (let j = 0; j < number.length; j++) {
//             if (arr[i] === number[j]) {
//                 isNot = false;
//                 break;
//             }
//         }
//         if (isNot) {
//             number.push(arr[i])
//         }
//     }
//     return number
// }

// const result = duplicate(arr)
// console.log(result);








