const title = `Top 10 benefits of React framework`;

const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

const words = normalizedTitle.split(' ');//обов'язково пробіл між лапкпми
// console.log(words);

const slug = words.join('-');
// console.log(slug);

const slug1 = title.toLowerCase().split(' ').join('-');
console.log(slug1);
// ================================================================
// метод split викликається на результаті виклику метода toLowerCase  на title,а  метод join викликається на результат виклику масива методом split!!!
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++