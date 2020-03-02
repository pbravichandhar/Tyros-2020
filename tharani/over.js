/*This program implements the function overloading
*prints the standard rresult as output
*/
//overload the function 
function foo(a,b,opts)
{
    if(opts['test'])
    {
        console.log(a+b);
    }
    else{
        console.log(a*b);
    }
}
//function call with different arguments
foo(1,2,{"method":"adds"});
foo(3,4,{"test":"Equals","bar":"tree"});

function sayHi() {   // (1) create
    return "Hello";
  }
  //function expression...
  
  let func = sayHi();    // (2) copy
  
  console.log(func); // Hello  
  //assign the function to the variable   
  let a=sayHi();
  //prints the variable.....
  console.log(a);
  //callback functions....
  function ask(question,yes,no){
      //question variable equal to the string it returns true
      if(question == "do you agree")
      {
          yes();
        }
      else{
          no();
      }
  }
  //if the question true then showOk executed.....
  function showOk()
  {
      console.log("you agreed...");
  }
  //if it is false showCancel executed.......
  function showCancel()
  {
      console.log("Your order cancelled....");
  }
  ask("hello",showOk,showCancel);
  //function declaration...
  function sumCheck(a,b){
    return a+b;
}
let res=sumCheck(10,20);
console.log(res);
//function expression
sayHi("John");
function sayHi(name){
    console.log(`hello ,${name}`);
}
//console.log(sayHello);
var standard_input=process.stdin;
standard_input.setEncoding('utf-8');
console.log("Enter the age");
standard_input.on('data',function(data){
    let welcome=(data>18)?()=>{ console.log("Hello");}:()=>{console.log("Greetings....");}
    welcome();
});
//arrow functions
//let func={fun1,fun2,fun3,.........}=>expressions
let sum=(a,b) => a+b;
//prints the arrow function....
console.log(sum(10,20));
let double=(n)=>n*2;
console.log(double(5));
let sayBye=()=>console.log("Hello");
sayBye();
//multiline arrow function....
let sub=(a,b)=>{
    let res=a*b;
    return res;
}
console.log(sub(30,5));