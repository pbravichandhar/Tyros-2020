/*Execution of functions with and
without parameter and function 
return type*/
function  showMessage()
{
    console.log("Hii everyone");
}
showMessage();
function myMessage()
{
    let a="Hii universe";
    console.log(a);
}
myMessage();
let myname="bob";
function Print()
{
    let myname="john";
    console.log("Hii"+myname);
}
console.log(myname);
Print();
function setValues(n1,n2)
{
console.log("Hello from"+" " +n1 + " "+ "to" + " " +n2);
}
setValues('annu','vicky');
setValues('vicky','sandy');
function calSum(a,b)
{
return a+b;
} 
let result = calSum(60,10);
console.log(result);