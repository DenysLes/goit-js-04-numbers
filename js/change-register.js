// Напиши скрипт который заменяет каждий символ на противоположный регыстр в строке
// Например,если JavaScript,то на выходе должно быть jAVAsCRIPT

const string = 'JavaScript';
const letters = string.split('');
let inverterString = '';

console.log(letters);

for (const letter of letters){
    console.log(letter);
    
    // if (letter === letter.toLowerCase()){
    //     console.log('Эта буква в нижнем регистре!!!', letter);

    //     inverterString += letter.toUpperCase();
    // } else {

    //     inverterString += letter.toLowerCase();
    // console.log(`ЭТА БУКВА В ВЕРХНЕМ РЕГИСТРЕ !!! -` , letter);
    // }
    inverterString +=
        letter === letter.toLowerCase()
            ? letter.toUpperCase()
            : letter.toLowerCase();
}
console.log('inverterString:', inverterString);