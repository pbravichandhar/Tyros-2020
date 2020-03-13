//Execution of loops
let i=1;
let Val_num=process.stdin;
Val_num.setEncoding('utf-8');
console.log("Enter the value:");
Val_num.on('data',function(data){
    for(let i=0;i<data;i++)
    {
        console.log("Work completed");
    }
});
while(data%2!=0){
console.log("Odd number");
}
console.log("Even number");
do{
    i = data * i;
    data++;
}while(data<5);
console.log(i);