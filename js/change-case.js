/*Напиши функцию changeCase(string) которая заменит в строке регистр
-каждый символ на противоположный
-Например,если строка`JavaScript`,то должно получится `jAVAsCRIPT`
*/
// const string ='JavaScript';
// const letters = string.split('');
// let  invertedString  = '';

// for (const letter of letters) {
//     const isInLowerCase = letter === letter.toLowerCase();

// invertedString += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log(`invertedString:`, invertedString);

const changeCase = function (string) {
    const letters = string.split('');
    let invertedString = '';

    for (const letter of letters) {
        const isInLowerCase = letter === letter.toLowerCase();

        invertedString += isInLowerCase
            ? letter.toUpperCase()
            : letter.toLowerCase();
    }
    return invertedString;

}

console.log(changeCase(`qweRTY`));
console.log(changeCase(`ManGo`));
console.log(changeCase(`AjAx`));
