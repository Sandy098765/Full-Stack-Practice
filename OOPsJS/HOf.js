//Takes another function as an argument (input)f
// function order(callprepare, callserve) {
//     console.log("1. Order Food.");
//     callprepare();f
//     callserve();
// }

// //call back functions
// function prepare() {
//     console.log("2. Preparation started")
// }

// function servecustomer() {
//     console.log("3. Enjoy your food");
// }

// // prepare();
// // order();
// // prepare();
// // order(prepare);
// order(prepare, servecustomer);

//---------------------------

// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }

// function processUser(name, callback) {
//     callback(name);
// }

// processUser("Alice", greet);


//Built-in HOF in js are --1)map()  2)reduce()  3)filter()

// const numbers = [1, 2, 3, 4, 5, 6];
// const doubled = numbers.map(num => num * 2);
// const filtered = doubled.filter(num => num > 5);

// const total = filtered.reduce((sum, num) => sum + num, 0);

// console.log("Doubled:", doubled);
// console.log("Filtered:", filtered);
// console.log("Total:", total);

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(num => num * 2);

// console.log(doubled);

// const numbers = [5,10,15,20];
// const bignum = numbers.filter(num => num >10);

// console.log(bignum);


const numbers = [1,2,3,4];
const sum = numbers.reduce((total,num) => total + num, 0);

console.log(sum);