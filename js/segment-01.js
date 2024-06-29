// Напищи скрипт який перевіряє входження числа в відрізок значеннь x1 та x2

// До x1
// після x2
// від x1 до x2
// До x1 або після x2

const x1 = 10;
const x2 = 30;
const number = 15;

console.log(` Число ${number} попадає в відрізок до ${x1} ?`, number < x1);
console.log(` Число ${number} попадає в відрізок після ${x2} ? `, number > x2);

const res = number > x1 && number < x2;

console.log(` Число ${number} попадає в відрізок від ${x1} до ${x2} ? `, res); 

// ===============

const res2 = number < x1 || number > x2;

// console.log('Число $(number) попадає в вієрізок від 0 до $(x1)' , res);
// console.log('Число $(number) попадає в вієрізок від $(x1) до $(x2)', res);

console.log(` Число ${number} попадає в відрізок до ${x1} або після ${x2} ? `,res2);