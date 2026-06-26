//function with same name but different parameters is function overloading
//In JS function  overloading is not supported but last written program will be executed

function add() {
    console.log(10 + 10);//0 parameters
}

function add(a) {
    console.log(a + 10);// 1 parameter
}

function add(a, b) {
    console.log(a + b);// 2 parameters
}

add();
add(10);
add(10, 20)



//(...) in JS is called Spread Operator/rest operator(feature ES6) which takes variables from 0 to n parameters for the same function name
///to make function overloading possible
//... = 0-n=1D[] numbers = 
function add(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum = sum + num;
    }
    return sum;
    console.log(`The sum is ${sum}`);
}

console.log(add(10)); // 10
console.log(add(10, 30)); // 40
console.log(add(10, 20, 30));// 80