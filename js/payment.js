// Подсчетать общую сумму покупок

const cart = [54, 28, 105, 70, 92, 17, 120];
//  2 Сделать переменную тотал до массива
let total = 0;
// // 1 Перебрать масив
// for (let i = 0; i < cart.length; i += 1) {
//     // carts[i] += `-${i}`;
//     console.log(cart[i]);

// // Каждый элемент прибавить к тотал
//     total += cart[i];
// }

// ====================
// ВАРІАНТ 2
// for (const value of cart) {
//     total += value;
// }

// console.log(`Total:`, total);

// Добавить такс
for (let i = 0; i < cart.length; i += 1) {
    cart[i] = Math.round(cart[i] * 1.1);

}

console.log(cart);