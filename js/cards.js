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
// console.log(index);
// cards.splice(index, 1);

// console.table(cards);
// Добавление по индексу
const cardToInsert = 'Карточка-6';
const index = 3;

cards.splice(1, 0, 7, 8, 9);
console.table(cards);


// Обнов вление по индексу
const cardToUpdate = 'Карточка-1';