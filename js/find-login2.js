/*
Напиши фуннкцию findLogin(allLogins , login) для поика логина
- Если логина нет,выводит сообщение:"Пользаватель [логин] не найден"
- Если логина есть,выводит сообщение:"Пользаватель [логин] найден"
*/



// const logins = [`m4ngoDoge` , `k1wibad3st` , `polyiscute` , `aj4xth3n4n` ];
// const loginToFind = `polyiscute`;

// const message = logins.includes(loginToFind)
//     ? `Пользаватель ${loginToFind} найден`
//     : `Пользаватель ${loginToFind} не найден`;

// console.log(message);

// ==========================================
const logins = [`m4ngoDoge`, `k1wibad3st`, `polyiscute`,`aj4xth3n4n`];

const findLogin = function (allLogins, loginToFind) {
    let message = `Пользаватель ${loginToFind} не найден`;

    for (const login of allLogins) {
        if (login === loginToFind) {
            message = `Пользаватель ${loginToFind} найден`;
        }
    }
}
    return message;
// }
// const logins = [`m4ngoDoge`, `k1wibad3st`, `polyiscute`,`aj4xth3n4n`];

// const findLogin = function (allLogins, loginToFind) {


//     for (const login of allLogins) {
//         if (login === loginToFind) {
//           return  `Пользаватель ${loginToFind} найден`;
//         }
//     }
//     return `Пользаватель ${loginToFind} не найден`;

// }
const logins = [`m4ngoDoge`, `k1wibad3st`, `polyiscute`, `aj4xth3n4n`];

const findLogin = function (allLogins, loginToFind) {
    const message = logins.includes(loginToFind)
        ? `Пользаватель ${loginToFind} найден`
        : `Пользаватель ${loginToFind} не найден`;
    return message;
}

// console.log(findLogin(logins,`avocod3r`));
// console.log(findLogin(logins,`k1wibad3st`));
// console.log(findLogin(logins, `jam4l`));
// console.log(findLogin(logins,`polyiscute`));
// const logins = [`m4ngoDoge`, `k1wibad3st`, `polyiscute`, `aj4xth3n4n`];

// const findLogin = function (allLogins, loginToFind) {
// return allLogins.includes(loginToFind)
//         ? `Пользаватель ${loginToFind} найден`
//         : `Пользаватель ${loginToFind} не найден`;
// }

// console.log(findLogin(logins,`avocod3r`));
// console.log(findLogin(logins,`k1wibad3st`));
// console.log(findLogin(logins, `jam4l`));
// console.log(findLogin(logins,`polyiscute`));