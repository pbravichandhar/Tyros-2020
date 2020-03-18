/**
* Task 4 : LCM of given numbers
*
* @author Arunkumar
* @version 1.0
* @since 06/03/2020
*/

const readline = require('readline');
const input = readline.createInterface({
input: process.stdin,
output: process.stdout
});

let lcmvalue = [];

//limit of numbers to calculate LCM of those numbers
input.question('Enter number limit to lcm perform :',(limit)=>{
recursiveReadline(limit-1);
});

//Recursive function to get user inputs to an array
function recursiveReadline(limit){
input.question('Enter elements:',(numbers)=>{
lcmvalue.push(numbers);
 

recursiveReadline(limit-1);

if(limit == 0){
lcm_calculate();
input.close();
}
});
}

//To Calculate LCM 
function lcm_calculate(){
let lcm = lcmvalue[0];
let gcd = lcmvalue[0];
for (let i = 1; i < lcmvalue.length; i++) {
gcd_calculate = gcd_calculate(lcmvalue[i], lcm);
lcm = (lcm * lcmvalue[i]) / gcd_calculate;
}

console.log(lcmvalue);

console.log("The LCM of given values is "+lcm);

function gcd_calculate(a, b) {
if (b == 0)
return a;
return gcd_calculate(b, a % b);
}
}