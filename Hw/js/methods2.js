//! 1
// const num = [1, 2, 3, 4, 10]

// let sum = 0
// num.forEach(number => {
//     sum += number
// })

// console.log(sum);


//! 2
// const num = [1, 2, 3, 45, 10]

// const maxNum = Math.max(...num)
// console.log(maxNum);

//! 3
// function findAverage(num){
//     if (num.length === 0) {
//         return 0
//     }
//     const average = num.reduce((sum, current) => sum + current, 0) / num.length 
//     return average
// }
// const num = [2, 6, 4]
// const average = findAverage(num)
// console.log(average);



//! 4
// const reversArr = (array) => {
//     return array.reverse()
// }

// const num = [1, 2, 3, 4, 5]
// const reverseNum = reverseArr(num)
// console.log(reverseNum);


//! 5
// const countEvenNum = num => {
//     const evenNum = num.filter(number => number % 2 === 0)

//     return evenNum.length
// }

// const num = [1, 2, 3, 4, 5, 6, 8, 9, 10]
// const count = countEvenNum(num)
// console.log(count);



//! 6
// const num = [1, 2, 3, 4, 5, 6, 8, 9, 10, 8, 9, 11]
// console.log(num);

// const unique = num.filter((item, index) => {
//     return num.indexOf(item) === index 
// })

// console.log(unique);


//! 7
// const num = [2, 3, 5, 8, 10, 9, 11]
// console.log(num);

// const index = num.indexOf(2)
// console.log(index);



//! 8
// const even = (arr) => {
//     return arr.reduce((sum, current, index) => {
//         if (index % 2 === 0) {
//             return sum + current
//         }
//         return sum
//     })
// }

// const num = [2, 3, 5, 8, 10, 9, 11]
// const result = even(num)
// console.log(result);


//! 9 
// const text = ['1', '2', '3', '4', '5']
// console.log(text);

// const num = text.map(Number)
// console.log(num);






