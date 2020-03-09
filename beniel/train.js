const read = require("readline");
const r = read.createInterface({
    input: process.stdin,
    output: process.stdout
})
r.question("enter the seat number", (number) => {
    let m = number % 8;
    if (m == 1 || m == 4) {
        console.log("lower berth");
    }
    if (m == 2 || m == 5) {
        console.log("middle berth");
    }
    if (m == 3 || m == 6) {
        console.log("upper berth");
    }
    if (m == 7) {
        console.log("side lower berth");
    }
    if (m == 0) {
        console.log("side upper berth");
    }
})