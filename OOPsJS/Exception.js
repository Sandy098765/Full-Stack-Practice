// try {
//     error code
// }
// catch() {
//     error handling
// }

// console.log("Program started");
// try {
//     let a = 10/b;//exception
//     console.log(a);
// }
// catch(error) {
//     console.log("Error occured and handled",error.message); 
// }
// console.log("Program ended");


 

// let a = 10/2;
// let a = 2/b;
// console.log(a);

// console.log("Program ended");



//throw
// let age = 22;
// try {
//     if(age < 18){
//         throw new Error("Age should be greator than 18, not eligible");
//     }
// }
// catch (e){
//     console.log(e .message);
// }
// finally{
//     console.log("Thank you");
// }

console.log("Program started");
try{
    let a = 10/b ;
    throw("b is not defined");
    console.log(a);
}
catch(e){
    console.log("Error occured and handled", e.message);
}
finally{
    console.log("Program ended");
}
