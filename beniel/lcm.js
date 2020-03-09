/*
@author : beniel
@date: 03-03-2020
@version : node js
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input_array = [];
rl.question('Enter no of elements:', (number) => {
    arrayinput(number);
});

function arrayinput(number) {
    rl.question('Enter elements:', (elements) => {
        for (let i = 0; i < number; i++) {
            input_array[i] = elements;
        }
        arrayinput(--number);
        if (number == 0) {
            console.log(input_array);
            LCM();
            rl.close();
        }
    });
}

function LCM() {
    let lcm = input_array[0];
    let gcd = input_array[0];
    // lcm logic for array of elements
    for (let i = 1; i < input_array.length; i++) {
        gcd = GCD(input_array[i], lcm);
        lcm = (lcm * input_array[i]) / gcd;
    }
    console.log("The lcm is :" + lcm);
    // normal lcm for two elements 
    function GCD(a, b) {
        if (b == 0)
            return a;
        return GCD(b, a % b);
    }


}