const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = [];


// array.forEach(elem => console.log(array));

// array.forEach((elem) => {
//     console.log(array)
// });

// // for (let item of array) {
// // console.log(array)
// }

array.forEach((elem) => {
newArray.push((elem += elem))
});
console.log(newArray)