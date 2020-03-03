/**
 * Task 4 : LCM of given numbers 
 * 
 * @author Akaash
 * @version 1.0
 * @since 03/03/2020
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lcmArray = [];

//count of numbers to calculate LCM of those numbers
rl.question('Enter the number count to perform LCM:',(count)=>{
    recursiveReadline(count);
});

//Recursive function to get user inputs to an array
function recursiveReadline(count){
    rl.question('Enter elements:',(numbers)=>{
        for(let i=0;i<count;i++){
            lcmArray[i] = numbers;
        }
    
    recursiveReadline(--count);

        if(count == 0){
            calculateLCM();
            rl.close();
        }
    });
}

//To Calculate LCM of given numbers 
function calculateLCM(){
    var lcm = lcmArray[0];
    var gcd = lcmArray[0];
    for (var i = 1; i < lcmArray.length; i++) {
        gcd = GCD(lcmArray[i], lcm);
        lcm = (lcm * lcmArray[i]) / gcd;
    }
    
    console.log("The LCM of given values is "+lcm);

    function GCD(a, b) {
        if (b == 0)
            return a;
        return GCD(b, a % b);
    }
}