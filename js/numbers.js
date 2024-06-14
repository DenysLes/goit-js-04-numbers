// let elementWidth = "50 px";
// const result = Number.parseInt(elementWidth);

// console.log(result);
// //  50 - запис буде такий в результаті



// // let elementWidth = "50 px";

// // elementWidth = Number.parseInt(elementWidth);
// // console.log("elementWidth:",elementWidth);
// // elementWidth: 50 - запис буде такий в результаті
// let elementHeight = "288.74px";
// elementHeight = Number.parseFloat(elementHeight);

// console.log("elementHeight:", elementHeight);
// elementHeith: 288.74 - запис буде такий в результаті

// Напмсати скрипт в якому підставити число в змінну,підставити степінь в зміннк,підвести число до степені і вивести.

// 1 підвести число в змінну
let base = prompt('число');
base = Number(base);
console.log(base);


// 2 підвести степінь в змінну
let power = prompt("степень");
power = Number(power);
console.log(power);
// 3  підвести число до степені і вивести
const result = base ** power;
console.log(result);
