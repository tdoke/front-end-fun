const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 10

function arrReduce(arr, callback, startVal) {
    let accm = startVal;
    arr.forEach(item => {
        accm = callback(accm, item);
    });
    return accm;
}

console.log(arrReduce(numbers, (accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0));