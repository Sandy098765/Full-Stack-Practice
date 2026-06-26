// console.log("1 open bms");//8 sec
// console.log("2 Select movie");//3 sec
// console.log("3 Select seats");//5 sec
// console.log("4 Make payment");//1 sec
// console.log("5 Ticket Booked"); // 2sec

//settimeout
// setTimeout(()=>{
//     console.log("1 open bms");
// }, 8000);
// setTimeout(()=>{
//     console.log("2 Search Movie");
// },3000);
// setTimeout(() => {
//     console.log("3 Select seats");
// }, 5000);
// setTimeout(()=>{
//     console.log("4 Make payment");
// }, 1000);
// setTimeout(() => {
//     console.log("5 Ticket Bookrd");
// }, 2000);


//Callbacks
setTimeout(()=>{
    console.log("1. Open BMS.");
       setTimeout(() => {
        console.log("2. Search Movie.");
            setTimeout(()=>{
                console.log("3. Select seats.");
                    setTimeout(() => {
                        console.log("4. Make payment.");
                            setTimeout(()=>{
                                console.log("5. Ticket booked.");
                            },2000);
                    }, 1000);
            }, 5000);
       }, 3000);
}, 8000);