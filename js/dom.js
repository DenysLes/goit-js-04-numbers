const btnAdd = document.querySelector(`button[data-add]`);
const valueInput = document.querySelector(`input[data-value]`);
const outputEl = document.querySelector(`.js-output span`);

let total = 0;

console.log(btnAdd);
btnAdd.addEventListener(`click`, function () {
    console.log(`click hehehehe`);

const value = Number(valueInput.value);

console.log(value);

total += value;
outputEl.textContent = total;
valueInput.value = '';
});



