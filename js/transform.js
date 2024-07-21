// Написать скрипт который обьединяет все элементы в одно строковое значение

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
let string = ``;

for (const friend of friends){
    string += friend + ',';
}
console.log(string.slice(0,string.length -1));
 