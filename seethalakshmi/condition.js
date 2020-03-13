/*Finds the leap year by 
using if else condition*/
let year = process.stdin;
year.setEncoding('utf-8');
console.log("Enter the year:");
year.on('data',function(data){
if(data%4 == 0){
    console.log("The given year is a leap year");
}
else{
    console.log("The given year is not a leap year");
}
});
//Use of conditional operator 
let Age = process.stdin;
Age.setEncoding('utf-8');
console.log("Enter your age:");
Age.on('data',function(data){

    let accessallowed = (data>=18)?"Allowed":"Not allowed";
    console.log(accessallowed);
});
age.on('data',function(data){
 let access=(data<3)?'Hii baby':(data>18)?"Hello":(data<100)?"Greetings":"What an unusal age";
 console.log(access);
});
//Else If exexcution
let Valv_num = process.stdin;
Valv_num.setEncoding('utf-8');
console.log("Enter the value:");
Valv_num.on('data', function (data) {
  if (data % 7 == 0) {
    console.log("Is a multiple of 7");
  }
  else if (data <= 30) {
    console.log(Math.sqrt(data));
  }
  else {
    console.log(data * data);
  }
});
