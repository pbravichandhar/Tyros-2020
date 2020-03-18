const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let d = [];
rl.question('Enter no of elements:', (number) => {
    arrayinput(number);
});

function arrayinput(number) {
    rl.question('Enter elements:', (elements) => {
        for (let i = 0; i < number; i++) {
            d[i] = elements;
        }
        arrayinput(--number);
        if (number == 0) {
            console.log(d);
            LCM();
            rl.close();
        }
    });
}

function LCM() {
    let lcm = d[0];
    let gcd = d[0];
    // lcm logic for array of elements
    for (let i = 1; i < d.length; i++) {
        gcd = GCD(d[i], lcm);
        lcm = (lcm * d[i]) / gcd;
    }
    console.log("The lcm is :" + lcm);
    // normal lcm for two elements 
    function GCD(a, b) {
        if (b == 0)
            return a;
        return GCD(b, a % b);
    }
}
