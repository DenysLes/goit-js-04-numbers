// Приведеня до булю (Boolean - конструктор).на пркладі Boolean(value).

// Запам'ятайте 6 хибних (falsy) значень, що приводяться до false у логічному перетворенні: 0, NaN, null, undefined, порожній рядок і false. Абсолютно все інше приводиться до true.

// console.log(Boolean(0)) - false;
// console.log(Boolean(5)) - true;

// ===================================
// Логіяний оператор І.
// Приводиться до буля
// Зупиняється (і виводить) на брехні (false) або ж останній операнд
// наприклад : зупинилося на першій ж брехні,то далі код не перевіряється ,а консолиться
// console.log(5 && 7 && 'mango'); 
// 'mango'
// console.log(5 && 0 && 'mango');

// const age = 20;
// console.log(age > 10 && age < 30); // true && true -> true

// const age = 50;
// console.log(age > 10 && age < 30); // true && false -> false
// console.log(age > 80 && age < 120); // false && true -> false


// 0 (бо нуль в приведенні до буля це false!!!)

// =======================
// Логічний оператор АБО
// Приводиться до буля
// Оператор || приводить всі операнди до буля і повертає значення одного з них. Лівий операнд - якщо його можна привести до true, і правий - в інших випадках.

// У наступному прикладі умова зліва поверне true, тому результатом всього виразу буде true - повернеться значення першого операнда, яке було приведене до true.
// const age = 5;
// console.log(age < 10 || age > 30); // true || false -> true

// В цьому випадку результатом теж буде true, оскільки хоча б один із операндів, в цьому випадку правий, був приведений до true.
// const age = 40;
// console.log(age < 10 || age > 30); // false || true -> true

// А тут жодна з умов не виконується, тому отримуємо false - значення останнього операнда.
// const age = 20;
// console.log(age < 10 || age > 30); // false || false -> false

// Тобто, логічне «АБО» зупиняється на правді і повертає те, на чому зупинилося або останній операнд.
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true

// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // true

// ==============================
// Логічне «НЕ»


// Всі оператори, які ми розглядали до цього, були бінарними - містять два операнди: лівий і правий. Логічне «НЕ» - це унарний оператор, який виконує операцію над одним операндом з правої сторони.



// Вираз

// Оператор ! приводить операнд до буля, якщо необхідно, а потім робить інверсію - змінює його на протилежний true -> false або false -> true.



console.log(!true); // false
console.log(!false); // true
console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true

// const isOnline = true;
// const isNotOnline = !isOnline; // !isOnline -> !true -> false







