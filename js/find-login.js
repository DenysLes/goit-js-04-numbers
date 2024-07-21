// Напиши скрипт поиска логина.
// Если логина нет,выводит сообщение:"Пользаватель [логин] не найден"
// Если логина есть,выводит сообщение:"Пользаватель [логин] найден"

// Сначала через фор
// Потом через фор...оф
// Логика break
// Метод includes() с тернарным оператором

const logins = [`m4ngoDoge` , `k1wibad3st` , `polyiscute` , `aj4xth3n4n` ];
const loginToFind = `polyiscute`;
// let message = `Пользеватель ${loginToFind} не  найден`;

// for (let i = 0; i < logins.length; i += 1){
    // const login = logins[i];


// console.log(`Login:`, login);
// console.log(`${login}===${loginToFind}: `, login === loginToFind);

// if (login === loginToFind) {
//     console.log(`Ура равны!!!`);
//         message = `Пользеватель ${loginToFind}  найден`;
//         break;
// }
//  }
    
// console.log(message);

// ?================================

// for ( const login of logins) {
// console.log(`Login:`, login);
// console.log(`${login}===${loginToFind}:`, login === loginToFind);

// if (login === loginToFind) {
//     console.log(`Ура равны!!!`);
//         message = `Пользеватель ${loginToFind}  найден`;
//         break;
// }
//     }
// console.log(message);

// ===============================
// ТРЕНАРНИЙ оператор.метод includes
const a = 15 > 10 ? `так` : `ні`;
const message = logins.includes(loginToFind) ? `так` : `ні`;

console.log(message);
