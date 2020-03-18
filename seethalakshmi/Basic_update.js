/*Use of strict mode to avoid errors
and basics of javascript*/
"use strict"
console.log("welcome ");
console.log("Hello World");
let user = "John", id = 1 ,message = "Hello";
console.log("User name:" +user  + " " +"Usser id:" +id  + " " + "User message:" +message);
let info ;
info =" Hello";
info ="Universe";
console.log(info);
let text ;
text = info;
console.log(text);
console.log(`The value is: ${3+4}`);
//Performs boolean operation
let bool_yes = "true";
let bool_no = "false";
const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process. stdout
});
let val_Num;
rl.question('Enter the value:',(val_Num)=>{
if(val_Num%2 == 0){
    console.log(bool_yes);
}
else{
    console.log(bool_no);
}
});