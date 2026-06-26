//add 2 numbers --declared a function
function add()
{
    let a = 10+20;
    console.log(a);
}
//call function
add();

//find square of a number
function square()
{
    // let a = 5*5;
    // console.log(a);
    let num = 2;
    console.log(num*num);
}
square();

//waf to find the area and parimeter of a circle
function area()
{
    let a = 2;
    let area = 3.142 * a * a;
    console.log(area);
}
area();

function peri()
{
    let r = 3;
    let perimeter = 2*3.142 * r;
    console.log(perimeter);
}
peri();

//waf to find the Simple Interest--->ptr/100
function simpleIntrest()
{
    let p = 1000;
    let t = 2;
    let r = 3;
    let si = (p*t*r)/100;
    console.log(si);
}
simpleIntrest();