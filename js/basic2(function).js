// const add = function (x, y) {
//     console.log(x);
//     console.log(y);
    
//     const result = x + y;
//     console.log(`x + y =`, result);
//     console.log(`add - выполняется функция`);
// }

// add(5,10)
// add(20,30)
// add(30, 50)

//

const fn = function (value) {
    console.log(1);

    console.log(2);

    if (value < 50) {
        return `Меньше чем 50`;
    }
            return `Больше чем 50`;
}

console.log(`Результат фу-ции` ,fn(10));
console.log(`Результат фу-ции` ,fn(1000));