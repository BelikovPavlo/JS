//! 1
// const count = (A, B) => {
//     for (let i = A; i <= B; i++) {
//       let divisors = ''
//       let count = 0
  
//       for(let j = 1; j <= i; j++){
//         if (i % j === 0) {
//           divisors += j + ' '
//           count++
//         }
//       }
//       console.log(`Дільники числа ${i} - ${divisors}, к-ть дільників: ${count}.`);
      
//     }
//   }
  
//   count(2, 10)




//! 2
// for (let num = 2; num <= 1000; num++) {
//   let simply = true

//   for (let i = 2; i * i <= num; i++) {
//     if (num % i === 0) {
//       simply = false
//       break
//     }
//   }

//   if (simply) {
//     console.log(num);
//   }
// }



