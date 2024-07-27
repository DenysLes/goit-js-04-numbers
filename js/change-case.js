/*Напиши функцию changeCase(string) которая заменит в строке регистр
-каждый символ на противоположный
-Например,если строка`JavaScript`,то должно получится `jAVAsCRIPT`
*/
const string ='QwErtZXcV';
const letters = string.split('');
let  invertedString  = '';

for (const letter of letters) {
    const isEqual = letter === letter.toLowerCase();


invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
}
console.log(`invertedString:` , invertedString);