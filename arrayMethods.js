// const numbers = [10, 20, 30, 40, 50];

// forEach, map, find, filter, reduce 


// for (let item of numbers) {
//     console.log(item);
// }

// forEach don't return anything

// numbers.forEach(item => console.log(item)); 

// map return a new array but don't change main array.
// numbers.map(item => console.log(item))

// const a = numbers.forEach(item => item);
// console.log(a);
// const b = numbers.map(item => item+2);
// console.log(b)
// console.log(numbers)

// const numbers = [10, 21, 30, 41, 50];
// const x = numbers.find(item => item === 32);
// console.log(x);

// const z = numbers.filter(item => item % 2 === 1);
// console.log(z)

const numbers = [10, 20, 30, 40, 50];
// let sum = 0;
// for (let item of numbers) {
//     sum += item;
// }
// console.log(sum);

const sum = numbers.reduce((preValue, currentValue) => preValue + currentValue, 0);
console.log(sum)