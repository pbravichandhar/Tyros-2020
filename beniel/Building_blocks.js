/* 
@author : Beniel
@language : node js
@since : 09-03-2020
*/
const read = require("readline");
const r = read.createInterface({
    input: process.stdin,
    output: process.stdout
})
let a = [];
r.question("enter how many line you want to print  ", (number) => {
    r.question("enter the symbol to print  ", (symbol) => {
        console.log("buildStaircase (" + number + " , " + symbol + ")");
        print_To(number, symbol);
        r.close();
    })
})

const print_To = (n, symbol) => {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            a.push(symbol);
        }
        for (let z = i + 1; z <= n; z++) {
            a.push("_");
        }
        console.log(a);
        a = [];
    }
}