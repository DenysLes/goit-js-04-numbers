const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5'
];

console.table(cards);

// Удаление по индексу indexOf
// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(cardToRemove);
// console.log(index);

// cards.splice(index, 3);
// console.table(cards); //Останутся 4 и 5

// cards.splice(0, 3);
// console.table(cards);//Останутся 1 и 2
// Добавление по индексу
// const cardToInsert = 'Карточка-6';
// const index = 3;

// cards.splice(index, 0, cardToInsert);
// console.table(cards)

//splice(position, 0, new_element_1, new_element_2, ...)
// cards.splice(1, 0, 7, 8, 9);//splice(position, 0, new_element_1, new_element_2, ...)
// Аргумент position вказує початкову позицію в масиві, куди будуть вставлені нові елементи.
// Другий аргумент - це нуль, він говорить методу не видаляти елементи в місці додавання нових.
// Третій, четвертий і всі наступні аргументи - це нові елементи, які додаються в масив
// console.table(cards);

// const colors = ["red", "green", "blue"];

// colors.splice(2, 0, "purple");
// console.log(colors); // ["red", "green", "purple", "blue"]


// Можна додати довільну кількість елементів, передавши четвертий, п'ятий аргумент тощо.



// const colors2 = ["red", "green", "blue"];

// colors2.splice(1, 0, "yellow", "pink");
// console.log(colors2); // ["red", "yellow", "pink", "green", "blue"]



// Обнов вление по индексу
const cardToUpdate = 'Карточка-4';
const index = cards.indexOf(cardToUpdate) ;

cards.splice(index, 1, `Обновлённая Карточка-4`);
console.table(cards);

