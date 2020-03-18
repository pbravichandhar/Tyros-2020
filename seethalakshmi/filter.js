const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let Person_info = { Name : " " , Notes :[]};
let Input=[];
rl.question('Enter your name:',(Name)=>{
    Person_info.Name =Name;
    rl.question('Enter number of elements:',(Number)=>{
        recursiveReadline(Number)
    });
});
function recursiveReadline(Number){
    rl.question('Enter elements:',(elements)=>{
        for(let k=0; k<Number;k++){
            Input[k]=elements
        }
        recursiveReadline(Number-1);
        if(Number==0){
            console.log(Input);
            printValue();
            rl.close();
        }
    });
}
function printValue(){
    Person_info.Notes.push(Input);
    let max = 0;
    for(let i=0;i<Input.length-1;i++){
        if(max<Input[i]){
            max=Input[i];
        }
    }
    Person_info.topNote=max;
    console.log(Person_info);
}