/*Finds the leap year by 
using if else condition*/
const readline=require('readline');
const rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout,
});
let year;
rl.question('Enter a year:',(year)=>{
if(year%4 == 0){
    console.log("The given year is a leap year");
}
else{
    console.log("The given year is not a leap year");
}
});