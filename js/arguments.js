// Псевдомасив arguments и Arrey.from

// const fn = function () {
//     console.log(arguments);

//     const args = Array.from(arguments);

//     console.log(args);
// }

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// =================================
// МЕТОД более современный. rest - остаток.

// const fn = function (...args) {
//     console.log(args);

// }

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// ========================

const fn = function (a,b,c,...args) {
    console.log(`(${a},${b},${c}`);
    console.log(args);

}

fn(`hello` , 1, 2, 3);
fn('aloha' , 1, 2, 3, 4, 5);
fn('hi' , 1, 2, 3, 4, 5, 6, 7);

/*
на выходе такой лог :

(hello,1,2 - index 0,1,2 = fn(1, 2, 3)=a,b,c
 [3] - остальное это уже массив args

 (aloha,1,2 - index 0,1,2 = fn(1, 2, 3)=a,b,c
 [3, 4, 5] - остальное это уже массив args

 (hi,1,2 - index 0,1,2 = fn(1, 2, 3)=a,b,c
 [3, 4, 5, 6, 7] - остальное это уже массив args

*/
