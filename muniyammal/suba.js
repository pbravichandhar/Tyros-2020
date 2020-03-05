const readline = require('readline');
const ln = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let person = {
    name: "",
    notes: []
};
let inputArray = [];
ln.question('Enter your name:', (name) => {
    person.name = name;
    
    ln.question('Enter no of elements:',(number)=>{
        recursiveReadline(number-1);
    });
});
function recursiveReadline(number){
    ln.question('Enter elements:',(elements)=>{
       {
            inputArray[number] = elements;
        }
        recursiveReadline(number-1);

        if(number == 0){
            console.log(inputArray);
            ln.close();
        }
    });
}