//? Оператори

//! Математичні оператори

// console.log('Додавання 1 + 1 => 2', 1 + 1);


//! Мaтематичні оператори з різними типами данних

//console.log('Yes' + ' or' + ' not');
// ''
// ""
// ``
//! приводить все до string
// console.log('Number ' + 3); 
// console.log('4' - 2);
// console.log(2 + '4' + true);
// console.log(2 + true);

//console.log(2 * '10jdjhh'); //NaN(error)

//! унарний оператор +
// переводить все в number
// console.log(+'245');
// console.log(+'400');
// console.log(+'test'); //NaN(error)
// console.log(+true);
// console.log(+false);
// console.log(+undefined); //NaN(error)
// console.log(+null);

//! оператор присвоєння

// const pi = 3 + 0.14;
// console.log(pi);

//! скорочення

// let a = 1;
// a = a + 2;
// console.log(a);


// let b = 10
// console.log(b += 1); //11 b = b+1
// console.log(b -= 1); //10 b = b-1
// console.log(b *= 2); //20 b = b*1
// console.log(b /= 2); //10 b = b/1


//! інкремент і декремент

//* інкремент ++1

// let c = 10
// c = c + 1
// c += 1
// console.log(c);


// let d = 100
// d++
// console.log(d); // 101


// //* декремент --1

// let i = 111
// i--
// console.log(i); // 110


//! постфіксний і префіксний розміщення інкремент і декремент

//* постфіксне розміщення
//? спочатку показується значення
// let f = 999
// console.log(f++); // не вивело 1000
// console.log(f); // вивело


//* префіксний
//? навпаки
// let g = 999
// console.log(++g);
// console.log(g);


//! оператори порівняння

//* >
//* <
//* <=
//* >=
//* ==
//* ===
//* != НЕ рівність по значенням
//* !== НЕ сувора рівність (по типах)


// 1 == '1' => true

// 1 != '1' => false 
// 1 !== '1' => true 


// console.log(1 > 2);
// console.log(1 < 2);

// console.log(1 === 2);
// console.log(2 === 2);

// console.log(1 !== 2);
// console.log(2 !== 2);


//! порівняння різних типів данних

// console.log('2' > 1);
// console.log('1' == 1);

// console.log(true == 1);
// console.log(false == 1);

// console.log(1 === true);
// console.log(1 !== true);

// console.log(undefined == null);
// console.log(undefined === null);

// console.log(undefined == 1);
// console.log(null == 1);


// console.log('a' === 'a');
// console.log('A' < 'a');
// console.log('b' > 'a');
// console.log('abc' < 'abcd');




// let a = 'Hello'
// console.log('a' === a);



//! логічні оператори || &&
//! || - або
//! && - або

// console.log(true || true);
// console.log(true || false);
// console.log(false || false);



// console.log(true && true);
// console.log(true && false && true && true && true);



//! тернальний оператор

// let a = 2

// 1 === a ? console.log('1 === a') : console.log('1 !== a')


//! switch case

// const j = 2

// switch (j) {
//     case 1:
//         console.log(1);
//         break
//     case 2:
//         console.log(2);
//         break
//     default:
//         console.log(9999);
// }




///////////////////////////////////////////////


// function month() {
//     const monthNumber = document.querySelector('.monthNumber').value
//     switch (monthNumber) {
//         case '1':
//         case '2':    
//         case '12':
//             console.log('winter')
//             break
//         case '3':    
//         case '4':    
//         case '5':
//             console.log('spring');
//             break
//         case '6':    
//         case '7':    
//         case '8':
//             console.log('summer');
//             break
//         case '9':    
//         case '10':    
//         case '11':
//             console.log('fall');
//             break
//         default:
//             console.error('error');  
//     }
// }



//////////////////////////////////

// const select = document.getElementById('bgc')
// const bg = document.querySelector('body')
 
// select.addEventListener('change', function(){
//   const selectedValue = select.value
 
//   switch(selectedValue){
//     case 'green':
//       bg.style.backgroundColor = 'green'
//       break
//     case 'yellow':
//       bg.style.backgroundColor = 'yellow'
//       break
//     case 'blue':
//       bg.style.backgroundColor = 'blue'
//       break
//     default:
//       bg.style.backgroundColor = 'red'
//   }
// })

//////////////////

let week = prompt("Введіть номер дня тижня: ")
    switch (week) {
        case '1':
            alert('Понеділок');
            break;
        case '2':
            alert('Вівторок');
            break;    
        case '3':
            alert('Середа');
            break;    
        case '4':
            alert('Четверг');
            break;    
        case '5':
            alert('Пятниця');
            break;    
        case '6':
            alert('Субота');
            break;    
        case '7':
            alert('Неділя');
            break;    
    
        default:
            console.error('error');
            break;
    }





// let ocinka = prompt("Введіть оцінку(1 - 5): ")
//     switch (ocinka) {
//         case '1':
//             alert('Погано');
//             break;
//         case '2':
//             alert('Погано');
//             break;    
//         case '3':
//             alert('Задовільно');
//             break;    
//         case '4':
//             alert('Добре');
//             break;    
//         case '5':
//             alert('Відмінно');
//             break;        
//         default:
//             console.error('error');
//             break;
//     }

