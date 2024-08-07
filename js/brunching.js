// Розгалуження використовуються для виконання різноманітного коду, залежно від умови. Принцип роботи простий - результат умови приводиться до буля true або false, після чого потік програми спрямовується в ту або іншу гілку.
// if (умова) {
  // тіло if
// }
// Вхідні дані, які приводяться до буля, називаються умовою. Умова ставиться після оператора if в круглих дужках. Якщо умова приводиться до true, то виконується код у фігурних дужках тіла if.
// let cost = 0;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// }

// console.log(cost); // 100
// Якщо умова приводиться до false, код у фігурних дужках буде пропущений.
// let cost = 0;
// const subscription = "free";

// if (subscription === "pro") {
//   cost = 100;
// }

// console.log(cost); // 0

// Інструкція if...else
// if (умова) {
  // тіло if
// } else {
  // тіло else
// }
// Розширює синтаксис if таким чином, що якщо умова приводиться до false, виконається код у фігурних дужках після оператора else.
// let cost;
// const subscription = "free";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 0
// Якщо умова приводиться до true, тіло блока else ігнорується.
// let cost;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 100

// ============================
// Інструкція else...if
// Конструкція if...else може перевірити і зреагувати на виконання або невиконання лише однієї умови.
// Блок else...if дозволяє додати після else ще один оператор if з умовою. В кінці ланцюжка може бути класичний блок else, який виконається лише у тому випадку, якщо жодна умова не приведеться до true.
// let cost;
// const subscription = "premium";

// if (subscription === "free") {
//   cost = 0;
// } else if (subscription === "pro") {
//   cost = 100;
// } else if (subscription === "premium") {
//   cost = 500;
// } else {
//   console.log("Invalid subscription type");
// }

// console.log(cost); // 500
// При першому true перевірки припиняться і виконається лише один сценарій, який відповідає цьому true. Тому, такий запис варто читати як: шукаю перший збіг умови, ігнорую все інше.

// +++++++++++++++++++
// const selary = 1000;

// if (selary <= 500) {
//     console.log('Рівень 1');
// } else if (selary > 500 && selary < 1500) {
//     console.log('Рівень 2');
// } else if (selary > 1500 && selary < 3000) {
//     console.log('Рівень 3');
// }

// ======================================
// Тернарний оператор
// Тернарний оператор використовується у якості синтаксично коротшої заміни інструкції if...else, коли одній і тій самій змінній необхідно присвоїти різні значення за умовою.
// <умова> (?) <вираз_якщо_умова_правдива> (:) <вираз_якщо_умова_хибна>
// Працює за наступною схемою:
//Обчислюється умова.
//Якщо умова правдива, тобто приводиться до true, обчислюється вираз після (?).
//Якщо умова хибна, тобто приводиться до false, обчислюється вираз після (:).
// Значення обчисленого виразу повертається у якості результату роботи тернарного оператора.
// let type;
// const age = 20;

// if (age >= 18) {
//   type = "adult";
// } else {
//   type = "child";
// }

// console.log(type); // "adult"
// Виконаємо рефакторинг, замінивши if...else на тернарний оператор.
// const age = 20;
// const type = age >= 18 ? "adult" : "child";
// console.log(type); // "adult"
//Запишемо операцію пошуку більшого числа.
//const num1 = 5;
// const num2 = 10;
// let biggerNumber;

// if (num1 > num2) {
//   biggerNumber = num1;
// } else {
//   biggerNumber = num2;
// }

// console.log(biggerNumber); // 10

// Код працює правильно, отримуємо більше число з двох, але це рішення здається занадто громіздким, враховуючи, наскільки проста проблема. Використовуємо тернарний оператор.
// const num1 = 5;
// const num2 = 10;
// const biggerNumber = num1 > num2 ? num1 : num2;

// console.log(biggerNumber); // 10
// (Тернарний оператор повинен використовуватися у простих операціях присвоєння або повернення. Його використання для опису складних розгалужень - погана практика (антипатерн).)

// +++++++++++++++++++++++++
// const balance = 1000;
// let message;
// if (balance >= 0) {
//     message = 'Позетивний баланс';
// } else {
//     message = 'Негативний баланс';
// }
// або такий варіант запису
// const message = balance >= 0 ? 'Позитивний баланс' : 'Негативний баланс';
// console.log(message)

// =================================

// Області видмисті

// Глобальна
// Блочна
// Функціональна
// const a = 15;
// if (true) {
//   console.log(a);
// }
// 15

// if (true) {
//   const b = 22;
// }
// console.log(b);
// error
// const a = 15;

// function foo(a) {       
//   console.log(a)
//  var b = 22;
// }
// console.log(b);       