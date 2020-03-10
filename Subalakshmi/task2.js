const arrange = require("readline")
const a =arrange. createInterface({
input : process . stdin,
output : process . stdout
})
a.question("enter the number",(n)=>{
let count = 0; 
let N;
    for (let L = 1; L * (L + 1) < 2 * N; L++) 
    { 
        let a = (1.0 * N-(L * (L + 1)) / 2) / (L + 1); 
        if (a-a == 0.0)  
            count++;         
    } 
    return count; 
console.log("the sum is "  + count);
})


