// щоб розпарсити число. парсить з ліва на право ,до першого не числа чи символа,(на приклад крапка),якщо перед число будуть букви чи символи перестане парсити видасть помилку NaN not a number,не число і все


// let elementWidth = "50 px";
// const result = Number.parseInt(elementWidth);
// console.log(result);

// //  50 - запис буде такий в результаті


// let elementWidth = "50 px";
// elementWidth = Number.parseInt(elementWidth);
// console.log("elementWidth:", elementWidth);

// // elementWidth: 50 - запис буде такий в результаті

// ===================================================

// let elementHeight = "288.74px";
// elementHeight = Number.parseFloat(elementHeight);
// console.log("elementHeight:", elementHeight);

// elementHeith: 288.74 - запис буде такий в результаті
// а з parsInt запис був б такий 288 (тобто без крапки та цифр після неї)

// ================================================================
// метод що вісікає лишні цифри ,які не потрібні в записсі чи результаті роботи

// let salary = 1300.16472;
// salary = salary.toFixed(2);
// salary = Number(salary);
// console.log(salary);

// або простіший запмс однією строкою
// salary = Number(salary.toFixed(2));
// console.log(salary);

// ============================
// перетворення строки в число(преобразовування)
// let quontity = '30';
// let value = 'abcdefg';
// console.log(Number(quontity));-буде преобразоване до числа зі строки(строка записуеться в лапках)
// console.log(Number(value));-буде нот е намбер

// Напмсати скрипт в якому підставити число в змінну,підставити степінь в зміннк,підвести число до степені і вивести.

// 1 підвести число в змінну
// let base = prompt('число');
// base = Number(base);
// console.log(base);


// 2 підвести степінь в змінну
// let power = prompt("степень");
// power = Number(power);
// console.log(power);


// 3  підвести число до степені і вивести
// const result = base ** power;
// console.log(result);

// ====================================

// генеруємо псевдовипадкове число

// const max = 70;
// const min = 15;
// console.log(Math.random() * (max - min) + min);

// щоб округлялося до цілого числа(без цифр після коми)
// const max = 70;
// const min = 15;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);


