const staircase = require("readline");
const s = staircase.createInterface({
    input : process . stdin,
    output : process . stdout
})
let array = [];
s.question("enter the number",(n)=>{
    s.question("enter the symbol",(symbol)=>{
        console.log("pattern("+ n +" , "+ symbol +")");
        building(n,symbol);
        s.close();
    })
})
const building =(n,symbol)=>{
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            array.push(symbol);
        }
           for (let k=i+1;k<=n;k++){
               array.push("?");
           }
           console.log(array);
        array = [];
    }
}