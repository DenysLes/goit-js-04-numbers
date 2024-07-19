// Масивм,звернення до елементів масиву.

// const friends = [`Mango`, `Kiwi`, `Poly`, `Ajax`];
// console.table(friends);

// friends[1] = `Apple`;

// console.table(friends);


// const lastIndex = friends.length - 1;
// console.log(lastIndex);

// ========================
// Копія по значенню

// let a = 10;
// let b = a;

// console.log(a); //10
// console.log(b);//10 - копія змінної а

// a = 20;

// console.log(a);//20
// console.log(b);//10 - копія значення не змінює

// =====================================
// Копія по посиланню (ссылка)
const a = [1, 2, 3];
const b = a;

console.log(a); //Масив 1,2,3 // a = [1,2,3]
console.log(b);//b - копія змінної а //Масив не змінюється  b = [1,2,3]
// але якщо звернутися до елементу масиву,то
// наприклад

a[0] = 500;

console.log(`a`,a); //Масив 500,2,3 // a = [500,2,3]
console.log('b', b);//Масив 500,2,3 // a = [500,2,3]

console.log(a === b);//true - посилання на один масив(однакове посилання.)
// console.log( [1, 2, 3] === [1, 2, 3]  );//false - різні посилання

// ========================================================
// Ітерація. Або перебор масиву
// for - якщо потрібен індекс або змінити лемент масиву
// for...of - якщо індекс не потрібен і вмасиві нічого міняти не потрібно
const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
console.table(friends);
const lastIndex = friends.length - 1;
for (let i = 0; i <= lastIndex; i += 1) {
    console.log(i);
}

