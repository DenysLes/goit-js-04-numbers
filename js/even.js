// Напиши скрипт который посчытивает все чётные чысла в массиве
const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);

//     if (numbers[i] % 2 === 0) {
//         console.log(`чётное:`,numbers[i]);
//    total += numbers[i];
//     }
// }
for (const number of numbers) {
// console.log(number);

if (number % 2 !== 0) {
console.log(`не Чётное! Эту итерацию нужно пропустить ! - `,number);
continue;
    }
   
    console.log(`${number} - Чётное !!!`);
    total += number;
 }
console.log(`Total:`, total);


 