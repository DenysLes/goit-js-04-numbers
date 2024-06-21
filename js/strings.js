// важливо памёятати.!!!
// приклад message.length-звернення до свойства(характеристики)значеня
// приклад messagelength()-виклик метода (якогось)(із пузатими дужками - це виклик методу) )
// const message = 'в цій строці 24 символів';
// console.log(message.length);

// ===========================
// конкотенація строк. або сшивання з допомогою оператора +( плюс).
// плюс це оператор з боків від нього операнди
// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// const fullName = firstName + ' ' + lastName;
// console.log(fullName);
 
// Напишіть скрип і виведіть, де гістьx  y  поселився в  z номері q
// Замінивши  x,y,z,q на змінні
// const room = 715;
// const type = "VIP";

// const welcomeMsg = "Гість " + firstName + ' ' + lastName +  ' поселився в ' + type + ' номер ' + room;
// console.log(welcomeMsg);
// конкотенація строк(зшивання)

// const welcomeMsg = `Гість ${firstName} ${lastName} поселилась в ${type} номер ${room}`;
// console.log(welcomeMsg);
// шаблонна строка(краща версія конкотенації)

// ==================================
// Нормалізаація строк з методом toLowerCase/
// строка записується в нижньому регістрі

// const brand = 'Samsung';
// const normalizedBrand = brand.toLowerCase();
// console.log(normalizedBrand);

// let brand = 'SamSuNg';
// brand = brand.toLowerCase();
// console.log(brand);

// індексується строка(потрібні вам літери)
// наприклад
// let brand = 'saMsuNG';
// console.log(brand[3]);
// дає вказану літеру
// console.log(brand.slice(1).toLowereCase);
// на виході дає amsung унижньому регістрі,бо перша літера в JS це 0 (нуль) і так далі. в данному випадку від 2-ї літери все в нижньому регістрі.

// якщо я захочу першу букву в верхньому регістрі,а решту слова в нижньому,запис має мати такий вигляд
// brand = brand[0].toUpperCase() + brand.slice(1).toLowerCase();
// console.log(brand);
// ++====================

// Пошук в строці з методом includes()
// Для того щоб віфільтрувати небажані слова
// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'распродажа';

// const string1 ='Привет,я принц Абдул,это не спам,предлагаю тебе миллион';
// const string2 = 'Самая большая РАСПРОДАЖА этой недели,не пропустие!';
// const string3 = 'Рекламная кампания #fatlivesmatter';
// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

// console.log(string2.includes(blacklistedWord1));

// console.log(string2.toLowerCase().includes(blacklistedWord2));
// або такий запис

// const normalizedString2 = string2.toLowerCase();
// console.log(normalizedString2.includes(blacklistedWord2));

// console.log(string3.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord2));

