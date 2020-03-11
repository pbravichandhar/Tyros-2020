const readline = require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let range;
let i,j,z;
let symbol_arr=[];
rl.question('Enter the range:',(range)=>{
    rl.question('Enter the symbol you need to print:',(symbol)=>{
        for(i=0;i<range;i++){
            for(j=0;j<=i;j++){
                symbol_arr.push(symbol);
            }
            for(let x =i+1;x<=range;x++){
                symbol_arr.push('-');
            }
            console.log(symbol_arr);
            symbol_arr=[];
        }
        rl.close();
});
});