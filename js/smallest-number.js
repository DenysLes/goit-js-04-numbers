// const numbers = [51, 18, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// console.table(numbers);

// for (const number of numbers) {

//   if (number < smallestNumber) {
//       smallestNumber = number;
//  }
// }

// console.log(`smallestNumber`, smallestNumber);

// Д\З - Знайти найбільше число
// скласти алгоритм
// вирішити задачу
const numbers = [51, 18, 24, 7, 85, 19];
let bigestNumber = numbers[0];

console.table(numbers);

for (const number of numbers) {

  if (number > bigestNumber) {
bigestNumber = number;
 }
}

console.log(`bigestNumber`, bigestNumber);