const a=require("readline");
const b=a.createInterface({
    input:process.stdin,
    output:process.stdout
})
let arr=[];
b.question("enter the number to print",(num)=>{
    b.question("enter the symbol",(symbol)=>{
        patteren(num,symbol);
        b.close();
    })
})
const patteren=(n,symbol)=>{
for(let i=1; i<=n; i++)
    {
      arr.push(symbol.repeat(i));
        for(let k=i+1;k<=n;k++){
        arr.push("-");
    }
console.log(arr);
arr=[];
}
}

 