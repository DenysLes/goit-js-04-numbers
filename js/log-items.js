/*
Напищи функцию logItems (items) для того что - бы перебрать массив
*/
const logItems = function (items) {
    for (const item of items){
    console.log(item);
}
}

logItems ([`Mango`, `Kiw`, `Poly`, `Ajax`]);
logItems ([1,2,3,4,5]);
logItems([`клавиатура`, `наушники`, `часы`]);
// НЕ ВСЕ фунуции должны что-то возвращать !!! без return !