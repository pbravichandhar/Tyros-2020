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
let value_of=process.stdin;
value_of.setEncoding('utf-8');
console.log("Enter the value:");
value_of.on('data',function(data){
if(data%2 == 0){
    console.log(bool_yes);
}
else{
    console.log(bool_no);
}
});
let x;
console.log(x);
//Performs type conversion
let value = "true";
console.log(typeof(value));
value = Number(value);
console.log( typeof(value));