// Напиши скрипт подсчёта суммы покупки со скидкой в зависимости
// от потраченой суммы за всё время (партнёрская программа)

// Общая сумма потраченого находится в переменной totalSpent
// Сумма потраченого хранится в переменной payment
// Скидка хранится в  переменной discount

// Еслипотрачено от [100 до 1000)-- бронзовый партнёр.скидка 2%
// Еслипотрачено от [1000 до 5000) - серебряний партнёр,скидка 5%
// Еслипотрачено более [500 - золотой партнёр,скидка 10%
// Еслипотрачено менее 100 ) - не партнёр,скидка 0%

// В результате выводим сообщение
// " Оформляем заказ нв сумму [сумма],со скидкой [скидка] "
let totalSpent = 5000;
let payment = 500;
let discount = 0;

if (totalSpent < 1000) {
} else if (totalSpent >= 100 && totalSpent < 1000) {
    ondeviceorientationabsolute.log(`Бронзовый партнёр,скидка 2%`);
    discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
    console.log(`Сереьрянфй партнёр,скидка 5%`);
    discount = 0.05;
} else {
    console.log(`Золотой партнёр,скидка 10%`);
    discount = 0.1;
}

payment += payment * discount;
// payment = payment - payment * discount;

console.log
    (`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);

totalSpent += payment;
console.log(`Общая сумма потраченого вмагазине: ${totalSpent}`)
