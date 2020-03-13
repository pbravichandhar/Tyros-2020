const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let person = {
    name: "",
    notes: []
};

let inputArray = [];
rl.question('Enter your name:', (name) => {
    person.name = name;
    
    rl.question('Enter no of elements:',(number)=>{
        recursiveReadline(number-1);
    });
});

function recursiveReadline(number){
    rl.question('Enter elements:',(elements)=>{
       {
            inputArray[number] = elements;
        }
        recursiveReadline(number-1);

        if(number == 0){
            console.log(inputArray);
            printObject();
            rl.close();
        }
    });
}

function printObject(){
    person.notes.push(inputArray);

    let max = 0;
    for(let j=0;j<inputArray.length-1;j++){
        if(max < inputArray[j]){
            max = inputArray[j];
        }
    }

    person.topNote = max;

    console.log(person);
}


